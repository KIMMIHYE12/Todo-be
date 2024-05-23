const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

const mongoURI = `monogdb://localhost:27017/todo-demo`;

mongoose.connect(mongoURI);
