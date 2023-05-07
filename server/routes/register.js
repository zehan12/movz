const registerRouter = require("express").Router();
const { handleCreateRegisterUser } = require("../controllers/register.controllers");

//=================================
//  Register and create a User
//=================================
registerRouter.post("/", handleCreateRegisterUser )

module.exports = registerRouter;