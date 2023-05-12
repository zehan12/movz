const { handleLogin, checkAuth, handleLogout } = require("../controllers/authenticate.controller");
const { verifyAuthToken } = require("../middleware/auth");
const authRouter = require("express").Router();

//=================================
//  User Login
//=================================
authRouter.post("/login", handleLogin);

//=================================
//  Authenticate
//=================================
authRouter.get("/", verifyAuthToken, checkAuth );

//=================================
//  User Logout
//=================================
authRouter.get("/logout", verifyAuthToken, handleLogout);


module.exports = authRouter;