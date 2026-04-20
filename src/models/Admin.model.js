const mongoose =require("mongoose");


const AdminSchema=new mongoose.Schema({
  id: Number,
  firstName: String,
  email: String,
  password: String
})

const AdminModel=mongoose.model("Admin",AdminSchema);


module.exports=AdminModel