"use strict";

const getID = tag => document.getElementById(tag);
const ingredientList = document.querySelector(".ingredientList");
const btnAddIngredient = getID("btnAddIngredient");

const btnOpenMenubar = getID("btnOpenMenubar");
const btnCloseMenubar = getID("btnCloseMenubar");
const navMobile = document.querySelector(".nav-mobile");

function addIngredient ()
{
    let input = document.createElement("input");
    input.name = "ingredients";
    ingredientList.append(input);
}

function openMenubar ()
{
    navMobile.classList.add("visible");
}

function closeMenubar ()
{
    navMobile.classList.remove("visible");

}

window.addEventListener("DOMContentLoaded", function ()
{
    // this.alert("This web application was created to fulfill Web Technology module’s requirements and does not represent an actual company or service");
    // btnAddIngredient.addEventListener("click", addIngredient);

    btnOpenMenubar.addEventListener("click", openMenubar);
    btnCloseMenubar.addEventListener("click", closeMenubar);
});