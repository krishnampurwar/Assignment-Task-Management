const express = require('express');
const dbconnection = require('./config/db_connection');
const path = require("path");
const app = express();

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({
    extended: true
  }))
  app.use(bodyParser.json())
const authRoutes = require('./routes/authRoutes');
const TaskRoutes = require('./routes/taskRoutes');

app.use('/api',authRoutes);
app.use('/api',TaskRoutes);

dbconnection();
app.get("/", (req,res) => {
res.send('running succesfully');
})
app.listen(8080, (err) => {
    if (err){
        console.log("not running");}
    else
        console.log("Server is running at port 8080:");
});