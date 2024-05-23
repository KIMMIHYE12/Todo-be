const Task = require("../model/Task");

const taskController = {};

taskController.createTask = async (req, res) => {
  const { task, isComplete } = req.body;
  const newTask = new Task({ task, isComplete });
  await newTask.save();
  res.status(200).json({});
};

module.exports = taskController;
