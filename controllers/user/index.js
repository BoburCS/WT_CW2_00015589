const fs = require("fs");
const path = require("path");
const { v4: uuid4 } = require("uuid");
const { validationResult } = require("express-validator");
const userValidator = require("../../validators/index.js");
const users = require("../../data/users.json");
const recipes = require("../../data/recipes.json");
const { getEnabledCategories } = require("trace_events");

/**
 * Sign Up GET
 */
exports.signupGet = async (request, response) => 
{
    response.render("signup", { title: "FoodScript | Sign Up" } );
}

/**
 * Sign Up POST
 */
exports.signupPost = async (request, response) => 
{
    // Validation
    const errors = validationResult(request);
    if (!errors.isEmpty()) return response.render("signup", { errors: errors.array() } );
    
    try 
    {
        const data = fs.readFileSync(path.resolve("./data/users.json"));
        const users = JSON.parse(data);

        // Check if email already exists
        const existingUser = users.find(user => user.email === request.body.signupEmail);
        if (existingUser) return response.render("signup", { errors: [{ msg: "Email already registered"}] });

        // Create new user and push it to database
        let newUser = 
        {
            id: uuid4(),
            email: request.body.signupEmail,
            password: request.body.signupPassword
        };

        users.push(newUser);
        fs.writeFileSync(path.resolve("./data/users.json"), JSON.stringify(users, null, 2));
        
        // Successful registration then go back to homepage
        request.session.user = newUser;
        response.redirect("/profile");
    } 
    catch (error) 
    {
        response.status(500).send( { message: error.message || "Error Occured" } );
    }
}

/**
 * Log In GET
 */
exports.loginGet = (request, response) => 
{
    response.render("login", { title: "FoodScript | Log In" } );
}

/**
 * Log In POST
 */
exports.loginPost = (request, response) => 
{
    const errors = validationResult(request);
    if (!errors.isEmpty()) return response.render("login", { errors: errors.array() } );

    try 
    {
        const existingUser = users.find(user => user.email === request.body.loginEmail);
        if (!existingUser) return response.render("login", { errors: [{ msg: "Email not registered" }] });
    
        if (existingUser.password !== request.body.loginPassword) return response.render("login", { errors: [{ msg: "Incorrect password" }] });
    
        request.session.user = existingUser;
        response.redirect("/profile");
    } 
    catch (error) 
    {
        response.status(500).send( { message: error.message || "Error Occured" } );
    }
}

/**
 * Adminpage
 */
exports.adminpage = async (request, response) => 
{
    try 
    {
        response.render("admin", { title: "FoodScript | Admin", users } );
    }  
    catch (error) 
    {
        response.status(500).send( { message: error.message || "Error Occured" } );
    }
}

/**
 * Profile Page
 */
exports.profilepage = async (request, response) => 
{
    try 
    {
        if (!request.session.user) 
        {
            return response.redirect("/login");
        }

        const userRecipes = recipes.filter(recipe => recipe.email === request.session.user.email);
        response.render("profile", { title: "FoodScript | Your Profile", userRecipes } );    
    } 
    catch (error) 
    {
        response.status(500).send( { message: error.message || "Error Occured" } );
    }
}

/**
 * Log Out GET
 */
exports.logout = (request, response) => 
{
    request.session.destroy(function (error) 
    {
        if (error) console.log(error);
        else response.redirect("/");
    });
}
