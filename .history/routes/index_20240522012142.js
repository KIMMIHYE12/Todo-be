const express = require("express");
const router = express.Router;
const taskApi = require("./task.api");

router.arguments("/tasks", taskApi);
