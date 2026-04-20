const mongoose = require("mongoose");

async function connectionDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      serverSelectionTimeoutMS: 30000
    });

    console.log("MongoDB Connected");
  } catch (error) {
    console.log("Mongo Error:", error);
  }
}

module.exports = connectionDB;