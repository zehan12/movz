const jwt = require("jsonwebtoken");
const User = require("../models/User");
const config = require("../config/config");
const { errorMessage, status } = require("../helpers/status");
const SECRET = config.jwt.secret;

verifyAuthToken = async (req, res, next) => {
  console.log(req.cookies,"cookies")
  let token = req.cookies.auth;
  if (!token) {
    errorMessage.error = "Authentication Failed : Token not provided";
    errorMessage.user = { isAuth: false };
    return res.status(status.bad).send(errorMessage);
  }
  try {
    if (token) {
      const payload = await jwt.verify(token, SECRET);
    //   const payload = "507f1f77bcf86cd799439011"
      const user = await User.findById(payload);
      if (!user) {
        errorMessage.error = "User not found in DB"
        errorMessage.user = { isAuth: false };
        return res.status(status.bad).json(errorMessage);
      }
      req.user = user;
      next();
    } else {
      errorMessage.error = "Token required";
      return res.status(status.bad).json(errorMessage);
    }
  } catch (error) {
    console.log(error.message, "error");
    errorMessage.error = "Authentication Failed : " + error.message;
    errorMessage.user = { isAuth: false };
    return res.status(status.unauthorized).json(errorMessage);
  }
};

verifyToken = async (req, res, next) => {
  let token = req.headers.authorization;
  if (!token) {
    errorMessage.error = "Authentication Failed : Token not provided";
    return res.status(status.bad).send(errorMessage);
  }
  try {
    if (token) {
      const payload = await jwt.verify(token, process.env.SECRET);
      req.user = payload;
      next();
    } else {
      errorMessage.error = "Token required";
      return res.status(status.bad).json(errorMessage);
    }
  } catch (error) {
    console.log(error.message, "error");
    errorMessage.error = "Authentication Failed : " + error.message;
    return res.status(status.unauthorized).json(errorMessage);
  }
};

module.exports = { verifyAuthToken };
