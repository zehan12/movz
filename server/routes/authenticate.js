const { handleLogin } = require("../controllers/authenticate.controller");
const { successMessage, status } = require("../helpers/status");
const { verifyAuthToken } = require("../middleware/auth");
const authRouter = require("express").Router();

//=================================
//  User Login
//=================================
authRouter.post("/login", handleLogin);

//=================================
//  Authenticate
//=================================
authRouter.get("/", verifyAuthToken, ( req, res ) => {
    successMessage.user = {
        _id: req.user._id,
        isAdmin: req.user.role === 0 ? false : true,
        isAuth: true,
        email: req.user.email,
        name: req.user.name,
        lastname: req.user.lastname,
        role: req.user.role,
        image: req.user.image,
    }
    res.status(status.success).json(successMessage);
} );


module.exports = authRouter;