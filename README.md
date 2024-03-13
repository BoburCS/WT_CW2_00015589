# WT_CW2_00015589
Coursework Project from Web Technology module

## Basic Documentation

### Brief information about the app
This app is recipe sharing platform where users can signin and signup, explore recipes of other users, add their own recipes and delete recipes.

### How to run

#### Download the zip file
#### Open it in terminal
#### npm install
#### npm start
#### Go to browser
#### https://localhost:3000

### Dependencies list of the app

#### connect-flash - Enables temporary messages
#### ejs - Engine for generating HTML markup
#### express - Backend Web Framework for Node.js 
#### express-ejs-layouts - Layout support for EJS in Express
#### express-fileupload - Middleware for handling file uploads
#### express-session - Session management in Express
#### express-validator - Middleware for validating
#### nodemon - Automatically restarts server after the changes
#### uuid - Generates unique id for objects

### Project structure

. ├── app.js 
├── .gitignore 
├── package.json 
├── package-lock.json 
├── controllers 
│ ├── recipe 
│ │ └── index.js 
│ └── user 
│ │ └──index.js 
├── data 
│ ├── categories.json 
│ ├── recipes.json 
│ └── users.json 
├── public 
│ ├── assets 
│ │ ├── favicon 
│ │ ├── images 
│ │ └── uploads 
│ ├── css 
│ │ ├── globals.css 
│ │ ├── index.css 
│ │ ├── mobile.css 
│ │ ├── tablet.css 
│ │ └── utilities.css 
│ └── js 
│ | ├── index.js 
├── routes 
│ └── index.js 
├── validators 
│ └── index.js 
└── views 
├── layout 
│ └── main.ejs 
├── admin.ejs 
├── categories.ejs 
├── index.ejs 
├── latest-recipes.ejs 
├── login.ejs 
├── profile.ejs 
├── recipe.ejs 
├── signup.ejs 
└── submitRecipe.ejs

