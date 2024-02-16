const fs = require("fs");
const path = require("path");
const { v4: uuid4 } = require("uuid"); // Creating random id that will not repeat for recipes
const categoriesData = require("../data/categories.json");
const recipesData = require("../data/recipes.json");

/**
 * Homepage Controller
 */
exports.homepage = async (request, response) => 
{
    try 
    {
        const limitedCategories = 5;
        const categories = await categoriesData.slice(0, limitedCategories);
        const latest = await recipesData.slice(-5);
        latest.reverse();
        const american = recipesData.filter(recipe => recipe.category === "American");

        const food = { latest, american };

        response.render("index", { title: "FoodScript | Home", categories, food });
    } 
    catch (error) 
    {
        response.status(500).send({message: error.message || "Error Occured" });    
    }
};

/**
 * Categories Controller
 */
exports.categories = async (request, response) =>
{
    try 
    {
        const limitedCategories = 20;
        const categories = await categoriesData.slice(0, limitedCategories);

        response.render("categories", {title: "FoodScript | Categories", categories})
    } 
    catch (error) 
    {
        response.status(500).send({message: error.message || "Error Occured" });
    }
};

/**
 * Recipes Controller
 */
exports.recipes = async (request, response) =>
{
    try 
    {
        let recipeId = request.params.id;
        const recipe = await recipesData.find(recipe => recipe.id === recipeId);
        response.render("recipe", { title: "FoodScript | Recipe", recipe});    
    } 
    catch (error) 
    {
        response.status(500).send( { message: error.message || "Error Occured" } );
    }
};

/**
 * Specific Category Controller
 */
exports.categoriesById = async (request, response) => 
{
    try 
    {
        let categoryId = request.params.id;
        const limitedCategories = 20;
        const categoryById = await recipesData.filter(recipe => recipe.category === categoryId).slice(0, limitedCategories);
        response.render("categories", { title: "FoodScript | Categories", categoryById });
    } 
    catch (error) 
    {
        response.status(500).send( {message: error.message || "Error Occured"} );    
    }
}

/**
 * Latest Recipes Controller
 */
exports.latestRecipes = async (request, response) =>
{
    try 
    {
        const limitedRecipes = 20;
        const latest = await recipesData.slice( - (limitedRecipes));
        latest.reverse();
        response.render("latest-recipes", { title: "FoodScript | Latest Recipes", latest });
    }
    catch (error) 
    {
        response.status(500).send( { message: error.message || "Error Occured" } );    
    }
}

/**
 * Submit Recipe Get
 */
exports.submitRecipe = async (request, response) =>
{
    response.render("submitRecipe", { title: "FoodScript | Share your Recipe", message: request.flash("message"), error: request.flash("error") });
}

/**
 * Submit Recipe POST
 */
exports.submitRecipePost = async (request, response) =>
{
    try 
    {
        let imageUploadFile;
        let uploadPath;
        let newImageName;

        if (!request.files || Object.keys(request.files).length === 0)
        {
            console.log("No files were uploaded");
        }
        else
        {
            imageUploadFile = request.files.image;
            newImageName = Date.now() + imageUploadFile.name;

            uploadPath = path.resolve("./public/assets/uploads/") + "/" + newImageName;
            
            imageUploadFile.mv(uploadPath, function (error) 
            {
                if (error) return response.status(500).send(error);
            });
        }
        
        const newRecipe = 
        {
            id: uuid4(),
            name: request.body.name,
            description: request.body.description,
            email: request.body.email,
            ingredients: request.body.ingredients,
            category: request.body.category,
            image: newImageName
        };

        const data = fs.readFileSync(path.resolve('./data/recipes.json'));
        const json = JSON.parse(data);
        json.push(newRecipe);
        fs.writeFileSync(path.resolve('./data/recipes.json'), JSON.stringify(json, null, 2));
        
        request.flash('message', 'Recipe has been added.');
        response.redirect('/submit-recipe');
    } 
    catch (error) 
    {
        request.flash('error', error.message);
        response.redirect('/submit-recipe');
    }
}

