// internal imports
const server = require("./app");

const PORT = 3000;

server.listen(PORT,
    () => {
        console.log(`
        ################################################
        🚀 Server listening on port: ${PORT} 🚀
        ################################################
`)
    });