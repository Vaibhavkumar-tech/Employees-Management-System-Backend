const express=require('express');
const EmployeeModel=require("./models/Employees.model")
const AdminModel=require("./models/Admin.model")
const LoggedInUserModel=require("./models/LogInUser.model")
const cors = require("cors");


const app=express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Backend Working Fine 🚀");
});


app.post("/employees", async (req, res) => {
    const data=req.body;
    await EmployeeModel.create({
        id: data.id,
        firstName: data.firstName,
        email: data.email,
        password: data.password,
        job: data.job,
        img: data.img,
        about: data.about,
        skills: data.skills,
        language: data.language,
        availability: data.availability,
        age: data.age,
        location: data.location,
        experience: data.experience,
        task_count: data.task_count,
        tasks: data.tasks
    })
    res.status(201).jsonp({
        message:"Note created"
    })
});

app.post("/admin", async (req, res) => {
    const data=req.body;
    await AdminModel.create({
        id:data.id,
        firstName:data.firstName,
        email:data.email,
        password:data.password
    })
    res.status(201).jsonp({
        message:"Note created"
    })
});

app.get("/employees", async (req, res) => {
  try {
    const data = await EmployeeModel.find();
    res.status(200).json(data);
  } catch (error) {
    console.log("Employees Error:", error);
    res.status(500).json({
      message: error.message
    });
  }
});

app.get("/admin", async (req, res) => {
  const data = await AdminModel.find();
  res.json(data);
});

app.post("/loggeduser", async (req, res) => {
  
  const data = await LoggedInUserModel.create({
    role: req.body.role,
    data: req.body.data
  });

  res.status(201).json(data);

});
app.get("/loggeduser", async (req, res) => {
  
  const data = await LoggedInUserModel.find();
  res.status(200).json(data);

});
app.delete("/loggeduser", async (req, res) => {

  await LoggedInUserModel.deleteMany({});

  res.status(200).json({
    message: "All data cleared successfully"
  });

});
app.put("/employees/:id", async (req, res) => {

  const data = await EmployeeModel.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.status(200).json(data);

});


module.exports=app