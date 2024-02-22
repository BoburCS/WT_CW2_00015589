const { body } = require("express-validator");

exports.validateUser =
[
    body("signupEmail").isEmail().withMessage("Please enter a valid email address"),
    body("signupPassword").isLength({ min: 8, max: 16 }).withMessage("Password must be at least 8 characters long")
];