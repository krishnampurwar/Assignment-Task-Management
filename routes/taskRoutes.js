const { Router } = require('express');
const task = require('../controller/taskController');


const router = Router();
const auth = require('../middleware/auth');
var bodyParser = require('body-parser')




router.get("/tasks", auth, task.getTasks);

router.post("/tasks", auth, task.createTask);

router.get("/tasks/:id", auth, task.getTask);

router.put("/tasks/:id", auth, task.updateTask);

router.delete("/tasks/:id", auth, task.deleteTask);

module.exports = router;