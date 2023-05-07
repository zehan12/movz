// external lib
const express = require("express");

const app = express();

// setting routes
app.use("/api/v1/user",require("./routes/user"));
app.use("/api/v1/register", require("./routes/register"));
app.use("/api/v1/authenticate", require("./routes/authenticate"));


module.exports = app;