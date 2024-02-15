const categoriesData = require("../data/categories.json");
const recipesData = require("../data/recipes.json");

/**
 * Homepage Controller
 */
exports.homepage = async (request, response) => 
{
    try 
    {
        const limitedImages = 5;
        const categories = await categoriesData.slice(0, limitedImages);
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
        const limitedImages = 20;
        const categories = await categoriesData.slice(0, limitedImages);

        response.render("categories", {title: "FoodScript | Categories", categories})
    } 
    catch (error) 
    {
        response.status(500).send({message: error.message || "Error Occured" });
    }
};