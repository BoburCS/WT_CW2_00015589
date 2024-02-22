const fs = require("fs");
const path = require("path");
const { v4: uuid4 } = require("uuid");
const { validationResult } = require("express-validator");
const userValidator = require("../../validators/index.js");
const users = require("../../data/users.json");

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
        response.redirect("/");
    } 
    catch (error) 
    {
        response.status(500).send( { message: error.message || "Error Occured" } );
    }
}

/**
 * Log In GET
 */
exports.loginGet = async (request, response) => 
{
    response.render("login", { title: "FoodScript | Log In" } );
}

/**
 * Log In POST
 */
exports.loginPost = async (request, response) => 
{
    const errors = validationResult(request);
    if (!errors.isEmpty()) return response.render("login", { errors: errors.array() } );

    try 
    {
        const data = fs.readFileSync(path.resolve("./data/users.json"));
        const users = JSON.parse(data);
        
        const existingUser = users.find(user => user.email === request.body.loginEmail);
        if (!existingUser) return response.render("login", { errors: [{ msg: "Email not registered" }] });
    
        if (existingUser.password !== request.body.loginPassword) return response.render("login", { errors: [{ msf: "Incorrect password" }] });
    
        request.session.user = existingUser;
        response.redirect("/");
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
        response.render("profile", { title: "FoodScript | Your Profile" } );    
    } 
    catch (error) 
    {
        response.status(500).send( { message: error.message || "Error Occured" } );
    }
}