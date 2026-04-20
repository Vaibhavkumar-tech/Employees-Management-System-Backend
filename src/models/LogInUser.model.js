const mongoose = require("mongoose");

const LoggedUserSchema = new mongoose.Schema({

  role: {
    type: String,
    required: true,
  },

  data: {
    type: Object,
    required: true
  }

});

module.exports = mongoose.model("LoggedUser", LoggedUserSchema);