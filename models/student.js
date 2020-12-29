const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
//   studentId: {
//     type: String,
//   },
  firstName: {
    type: String,
    required: true,
  },

  lastName: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
  },

  dob: {
    type: String,
  },

  department: {
    type: String,
  }

});

module.exports = studentModel = mongoose.model("students", studentSchema);
