# WT_CW2_00015589
Coursework Project from Web Technology module

## Basic Documentation

### Brief information about the app
This app is recipe sharing platform where users can signin and signup, explore recipes of other users, add their own recipes and delete recipes. This web application is created with NodeJS, ExpressJS, EJS, and CSS.

### How to run

#### 1.Download the zip file
#### 2.Open it in terminal
#### 3.npm install
#### 4.npm start
#### 5.Go to browser https://localhost:3000

### Dependencies list of the app

-connect-flash --> Enables temporary messages
-ejs --> Engine for generating HTML markup
-express --> Backend Web Framework for Node.js 
-express-ejs-layouts --> Layout support for EJS in Express
-express-fileupload --> Middleware for handling file uploads
-express-session --> Session management in Express
-express-validator --> Middleware for validating
-nodemon --> Automatically restarts server after the changes
-uuid --> Generates unique id for objects

### Project structure

```
├───controllers
|   ├───recipe
|   └───user
├───data
|   ├───categories.json
|   |───recipes.json
|   └───users.json
├───public
│   ├───assets
|   |   ├───assets
|   |   ├───images
|   |   └───uploads
│   ├───css
│   └───js
├───routes
|   └───index.js
├───validators
|   └───index.js
├───views
|    └───layout
├───app.js
├───package-lock.json
├───package.json
└───README.md
```

### The Web App is live on

https://wt-cw2-00015589.onrender.com/