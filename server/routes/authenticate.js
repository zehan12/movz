const { handleLogin } = require("../controllers/authenticate.controller");
const authRouter = require("express").Router();

//=================================
//  User Login
//=================================
authRouter.post("/login", handleLogin);

module.exports = authRouter;