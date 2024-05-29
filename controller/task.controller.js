const Task = require("../model/Task");

const taskController = {};

taskController.createTask = async (req, res) => {
  try {
    const { task, isComplete } = req.body;
    const { userId } = req;
    const newTask = new Task({ task, isComplete, author: userId });
    await newTask.save();
    res.status(200).json({ status: "ok", data: newTask });
  } catch (err) {
    res.status(400).json({ status: "fail1", error: err });
  }
};

taskController.getTask = async (req, res) => {
  try {
    const taskList = await Task.find({}).populate("author");
    res.status(200).json({ status: "ok", data: taskList });
  } catch (err) {
    res.status(400).json({ status: "fail2", error: err });
  }
};

taskController.putTask = async (req, res) => {
  try {
    const userId = await Task.findById(req.params.id);
    if (!userId) {
      throw new Error("App can not find the id");
    }
    const fields = Object.keys(req.body);
    fields.map((item) => (userId[item] = req.body[item]));
    await userId.save();
    res.status(200).json({ status: "success", data: userId });
  } catch (err) {
    res.status(400).json({ status: "fail3", error: err });
  }
};

taskController.deleteTask = async (req, res) => {
  try {
    const deleteItem = await Task.findByIdAndDelete(req.params.id);
    res.status(200).json({ status: "delete", data: deleteItem });
  } catch (err) {
    res.status(400).json({ status: "fail4", error: err });
  }
};

module.exports = taskController;
