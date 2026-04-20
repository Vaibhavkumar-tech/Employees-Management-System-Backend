const mongoose =require("mongoose");


const EmployeesSchema=new mongoose.Schema({
    id: Number,

    firstName: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true
    },

    job: String,

    img: String,

    about: String,

    skills: [String],

    language: [String],

    availability: String,

    age: Number,

    location: String,

    experience: String,

    task_count: {
        active: {
        type: Number,
        default: 0
        },
        new_task: {
        type: Number,
        default: 0
        },
        complete: {
        type: Number,
        default: 0
        },
        failed: {
        type: Number,
        default: 0
        }
    },

    tasks: [
        {
        active: {
            type: Boolean,
            default: false
        },

        new_task: {
            type: Boolean,
            default: true
        },

        complete: {
            type: Boolean,
            default: false
        },

        failed: {
            type: Boolean,
            default: false
        },

        task_title: {
            type: String,
            required: true
        },

        task_description: {
            type: String,
            required: true
        },

        task_date: {
            type: String,
            required: true
        },

        category: {
            type: String,
            required: true
        }
        }
    ]
})


const EmployeeModel=mongoose.model("Employee",EmployeesSchema);


module.exports=EmployeeModel