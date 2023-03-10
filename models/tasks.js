const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
    user: {
        type:mongoose.Schema.Types.ObjectId,
      ref: "Employee",
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    status: {
          type: Boolean,
          default: false
    }
  }
);

module.exports = mongoose.model("Task", taskSchema);