const registerRouter = require("express").Router();

registerRouter.get("/",(req,res)=>{
    console.log(req.method)
    res.end("user")
})

module.exports = registerRouter;