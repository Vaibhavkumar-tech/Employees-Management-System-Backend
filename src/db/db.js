const mongoose = require("mongoose");

async function connectionDB() {
  await mongoose.connect("mongodb+srv://Vaibhav:wvE5Gj2LBwq84Rzb@employee-management-sys.fnqgo9n.mongodb.net/Storagemanagement");

  console.log("connect to db");
}

module.exports = connectionDB;