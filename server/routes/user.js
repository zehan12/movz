const userRouter = require("express").Router();

userRouter.get("/",(req,res)=>{
    console.log(req.method)
    res.end("user")
})

module.exports = userRouter;