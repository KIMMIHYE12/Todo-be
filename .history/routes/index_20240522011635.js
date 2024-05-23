const express = require("express");
const router = express.router;

router.post("/tasks", (req, res) => {
  res.send("create task");
});
router.get("/tasks", (req, res) => {
  res.send("get tasks");
});
