const express = require("express");
const router = express.Router();
const { homepage, categories, categoriesById, recipes, latestRecipes, submitRecipe, submitRecipePost, deleteRecipe } = require("../controllers/recipe/index.js");
const { signupGet, signupPost, loginGet, logout, loginPost, profilepage, adminpage } = require("../controllers/user/index.js");
const { validateUser } = require("../validators/index.js");

// Recipe Router
router.get("/", homepage);
router.get("/categories", categories);
router.get("/categories/:id", categoriesById);
router.get("/recipe/:id", recipes);
router.get("/latest-recipes", latestRecipes);
router.get("/submit-recipe", submitRecipe);
router.post("/submit-recipe", submitRecipePost);
router.get("/delete-recipe/:id", deleteRecipe);

// Users Router
router.get("/signup", signupGet);
router.post("/signup", validateUser, signupPost);
router.get("/login", loginGet);
router.get("/logout", logout);
router.post("/login", loginPost);
router.get("/profile", profilepage);
router.get("/admin555", adminpage);

module.exports = router;