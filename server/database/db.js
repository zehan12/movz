const mongoose = require("mongoose");
const config = require("../config/config");

const connectDB = async () => {
  const DB = config.db.url.replace('<password>', config.db.password);
  const options = {
    useNewUrlParser: true,
    autoIndex: true,
    useNewUrlParser: true,
    serverSelectionTimeoutMS: 5000,
  };
  try {
    await mongoose.connect(DB, options);
    console.log(`connected to DB ✅`);
  } catch (e) {
    console.log(`Error connecting to mongoose due to ${e.message} ❌`);
  }
};

module.exports = connectDB;
