const express = require("express");
const expressLayouts = require("express-ejs-layouts");

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(expressLayouts);

/**
 * View engine setup - EJS (Embedded JavaScript)
 */
app.set("layout", "./layout/main");
app.set("view engine", "ejs");

const routes = require("./routes/index.js");
app.use("/", routes);

app.listen(port, () => console.log(`Server is running on port ${port}`));