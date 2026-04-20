const mongoose = require("mongoose");

async function connectionDB() {
  await mongoose.connect(process.env.MONGODB_URI);

  console.log("connect to db");
}

module.exports = connectionDB;