const authRouter = require("express").Router();

authRouter.get("/",(req,res)=>{
    console.log(req.method)
    res.end("user")
})

module.exports = authRouter;