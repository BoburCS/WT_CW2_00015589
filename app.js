const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const flash = require("connect-flash");
const session = require("express-session");
const fileUpload = require("express-fileupload");

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(expressLayouts);

// This three modules/packages mainly used for getting user image file and saving it to local data json file
app.use(session( {secret: "FoodScriptSecretSession", saveUninitialized: true, resave: false, cookie: { secure: true } } ));
app.use(flash());
app.use(fileUpload());

/**
 * View engine setup - EJS (Embedded JavaScript)
 */
app.set("layout", "./layout/main");
app.set("view engine", "ejs");

const routes = require("./routes/index.js");
app.use("/", routes);

app.listen(port, () => console.log(`Server is running on port ${port}`));