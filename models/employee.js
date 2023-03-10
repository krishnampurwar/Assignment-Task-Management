const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const employeeSchema = new mongoose.Schema(
  {
    username: {
      type: String,
     
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
  }
);

module.exports = mongoose.model("Employee", employeeSchema);