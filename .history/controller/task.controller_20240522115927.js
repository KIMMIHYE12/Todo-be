const Task = require("../model/task");

const taskController = {};

taskController.createTask = (req, res) => {
  const { task, isComplete } = req.body;
  const newTask = new Task({ task, isComplete });
};

module.exports = taskController;
