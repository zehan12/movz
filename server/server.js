// internal imports
const server = require("./app");
const config = require("./config/config");
const connectDB  = require("./database/db");

const PORT = config.port;

// connecton to DB
connectDB()

server.listen(PORT,
    () => {
        console.log(`
        ################################################
        🚀 Server listening on port: ${PORT} 🚀
        ################################################
`)
    });