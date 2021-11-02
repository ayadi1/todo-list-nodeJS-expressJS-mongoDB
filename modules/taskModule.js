const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/taskmanager");

const TaskShema = new mongoose.Schema({
  body: String,
});

const Task = mongoose.model("Tasck", TaskShema);

module.exports = Task;
