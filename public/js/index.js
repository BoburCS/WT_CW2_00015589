"use strict";

const getID = tag => document.getElementById(tag);
const ingredientList = document.querySelector(".ingredientList");
const btnAddIngredient = getID("btnAddIngredient");

function addIngredient ()
{
    let input = document.createElement("input");
    input.name = "newRecipeIngredients";
    ingredientList.append(input);
}

window.addEventListener("DOMContentLoaded", function ()
{
    // this.alert("This web application was created to fulfill Web Technology module’s requirements and does not represent an actual company or service");
    btnAddIngredient.addEventListener("click", addIngredient);
});