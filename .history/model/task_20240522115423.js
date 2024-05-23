const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taskSchema = Schema({
  task: {
    type: String,
    required: true,
  },
  isComplete: {},
});
