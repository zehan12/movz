// external lib
const cookieParser = require("cookie-parser");
const express = require("express");

const app = express();

// configuring middleware needed for authentication
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser())

// setting routes
app.use("/api/v1/user", require("./routes/user"));
app.use("/api/v1/register", require("./routes/register"));
app.use("/api/v1/authenticate", require("./routes/authenticate"));

// handel unregistered routes
app.all("*", (req, res) => {
  res.status(404);
  if (req.accepts("html")) {
    res.send("<body><h1>PAGE NOT FOUND</h1></body>");
  } else if (req.accepts("json")) {
    res.json({ message: "404 Not Found" });
  } else {
    res.type("txt").send("404 NOT FOUND");
  }
});

module.exports = app;
