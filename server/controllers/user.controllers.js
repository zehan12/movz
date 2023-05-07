const User = require("../models/User");
const { status, errorMessage, successMessage } = require("../helpers/status");
const { empty, isValidEmail, validatePassword } = require("../utils/validation");

// @route     POST api/v1/register
// @desc      Register and create a user
// @access    Public
handleCreateRegisterUser = async ( req, res ) => {
    let { name, lastname, email, password, image } = req.body;
    // convert password into string
    if ( typeof password === "number" ) {
        password = String(password)
    }
    // check fields are not empty("")
    if  ( empty(name) || empty(lastname) || empty(email) || empty(password) || empty() ) {
        errorMessage.error = 'Firstname, lastname, email and password field cannot be empty';
        return res.status(status.bad).json(errorMessage);
    }
    // check email is valid
    if (!isValidEmail(email)) {
        errorMessage.error = 'Please enter a valid Email';
        return res.status(status.bad).json(errorMessage);
    }
    // check password validation
    if (!validatePassword(password)) {
        errorMessage.error = 'Password must be more than five(8) characters';
        return res.status(status.bad).json(errorMessage);
    }

    try {
        // check for user in db
        const userExit = await User.findOne({ email });
        // if user already in db throw error else create new
        if (userExit) {
            errorMessage.error = `User with this ${email} already exist`;
            return res.status(status.conflict).json(errorMessage)
        } else {
            const user = await User.create({ name, lastname, email, password, image })
            successMessage.message = "user created" 
            successMessage.user = user;
            return res.status(status.success).json(successMessage);
        }
    } catch (error) {
        errorMessage.error = `Operation was not successful due to ${error.message}`;
        return res.status(status.error).json(errorMessage);
    }

}

module.exports = {handleCreateRegisterUser};