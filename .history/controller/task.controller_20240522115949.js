const Task = require("../model/task");

const taskController = {};

taskController.createTask = async (req, res) => {
  const { task, isComplete } = req.body;
  const newTask = new Task({ task, isComplete });
  await newTask.save();
};

module.exports = taskController;
