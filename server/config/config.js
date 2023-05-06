require("dotenv").config({ path: __dirname + "/../../.env" });

const config = {
    env: process.env.NODE_ENV,
    port: process.env.PORT || 4200,
}

module.exports = config