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
    if (btnAddIngredient) btnAddIngredient.addEventListener("click", addIngredient);
    
    btnOpenMenubar.addEventListener("click", openMenubar);
    btnCloseMenubar.addEventListener("click", closeMenubar);
});