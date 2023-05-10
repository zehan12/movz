const { handleLogin, checkAuth } = require("../controllers/authenticate.controller");
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


module.exports = authRouter;