const express = require("express");
const router = express.Router();
const { homepage, categories, categoriesById, recipes, latestRecipes, submitRecipe, submitRecipePost } = require("../controllers/index.js");

router.get("/", homepage);
router.get("/categories", categories);
router.get("/categories/:id", categoriesById);
router.get("/recipe/:id", recipes);
router.get("/latest-recipes", latestRecipes);
router.get("/submit-recipe", submitRecipe);
router.post("/submit-recipe", submitRecipePost);

module.exports = router;