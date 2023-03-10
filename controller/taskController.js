const Tasks = require('../models/tasks');
const user = require('../models/employee');
const mongoose = require('mongoose');

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
var bodyParser = require('body-parser');

module.exports.getTasks = async (req, res) => {
    try {
      const tasks = await Tasks.find({ user : req.user.id }).populate("user");
      res.json(tasks);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };

  module.exports.createTask = async (req, res) => {
    try {
      const { title, description, date } = req.body;
      const newTask = new Tasks({
        title,
        description,
        user: req.user.id,
      });
      await newTask.save();
      res.json(newTask);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
  
  module.exports.deleteTask = async (req, res) => {
    try {
      const deletedTask = await Tasks.findByIdAndDelete(req.params.id);
      if (!deletedTask)
        return res.status(404).json({ message: "Task not found" });
  
      return res.sendStatus(204);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
  //Repositry is Created By Krishnam Purwar
  module.exports.updateTask = async (req, res) => {
    try {
      const { title, description, date } = req.body;
      const taskUpdated = await Tasks.findOneAndUpdate(
        { _id: req.params.id },
        { title, description, date },
        { new: true }
      );
      return res.json(taskUpdated);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
  //Repositry is Created By Krishnam Purwar
  module.exports.getTask = async (req, res) => {
    try {
      const task = await Tasks.findById(req.params.id);
      if (!task) return res.status(404).json({ message: "Task not found" });
      return res.json(task);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };