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
<ol>
    <li>-connect-flash --> Enables temporary messages</li>
    <li>-ejs --> Engine for generating HTML markup</li>
    <li>-express --> Backend Web Framework for Node.js</li>
    <li>-express-ejs-layouts --> Layout support for EJS in Express</li>
    <li>-express-fileupload --> Middleware for handling file uploads</li>
    <li>-express-session --> Session management in Express</li>
    <li>-express-validator --> Middleware for validating</li>
    <li>-nodemon --> Automatically restarts server after the changes</li>
    <li>-uuid --> Generates unique id for objects</li>
</ol>

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