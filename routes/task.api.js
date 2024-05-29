const express = require("express");
const authController = require("../controller/auth.controller");
const taskController = require("../controller/task.controller");
const router = express.Router();

router.get("/", taskController.getTask);

router.post("/", authController.authenticate, taskController.createTask);

router.put("/:id", taskController.putTask);

router.delete("/:id", taskController.deleteTask);

module.exports = router;
