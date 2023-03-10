const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Connect MongoDB at default port 27017.
const dbconnection = () =>{
 
  mongoose.connect('mongodb://localhost:27017/assignment');
}

module.exports = dbconnection;