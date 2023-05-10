const User = require("../models/User");
const { status, errorMessage, successMessage } = require("../helpers/status");
const { empty, isValidEmail, validatePassword } = require("../utils/validation");

// @route     POST api/v1/authenticate/login
// @desc      Login user
// @access    Public
handleLogin = async ( req, res ) => {
    let { email, password } = req.body;

    if (typeof password === "number") {
        password = String(password);
    }
    if (empty(email) || empty(password) ) {
        errorMessage.error = 'Firstname, lastname, email and password field cannot be empty';
        return res.status(status.bad).json(errorMessage);
    }
    if (!isValidEmail(email)) {
        errorMessage.error = 'Please enter a valid Email';
        return res.status(status.bad).json(errorMessage);
    }
    if (!validatePassword(password)) {
        errorMessage.error = 'Password must be more than five(5) characters';
        return res.status(status.bad).json(errorMessage);
    }

    try {
        const user = await User.findOne({ email });
        if (!user) {
            errorMessage.error = "User with this email does not exist"
            return res.status(status.notfound).json(errorMessage)
        }

        const passwordMatched = await user.verifyPassword(password);
        if (!passwordMatched) {
            errorMessage.error = 'The password you provided is incorrect';
            return res.status(status.bad).json(errorMessage);
        }
        const users = await user.generateToken()
        await users.save();
        successMessage.message = "user login"
        successMessage.user = users
        return  res.cookie("w_authExp", users.tokenExp).cookie("w_auth", users.token)
            .status(status.success).json(successMessage);
    } catch (error) {
        console.log(error)
        errorMessage.error = `Operation was not successful due to ${error.message}`;
        return res.status(status.error).json(errorMessage);
    }
}

module.exports ={
    handleLogin
}