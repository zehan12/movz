const registerRouter = require("express").Router();
const { handleCreateRegisterUser } = require("../controllers/user.controllers");

//=================================
//  Register and create a User
//=================================
registerRouter.post("/", handleCreateRegisterUser )

module.exports = registerRouter;