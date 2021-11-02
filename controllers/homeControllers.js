const express = require("express");
const taskModule = require("../modules/taskModule");

const render_heme_page = (req, res) => {
  return res.render("index");
};

const get_all_task = (req, res) => {
  taskModule.find((err, result) => {
    if (err) {
      res.json({ data: false });
    } else {
      res.json(result);
    }
  });
};
const add_task_to_db = (req, res) => {
  const taskValue = req.body.taskValue;
  const newTask = new taskModule({ body: taskValue });
  newTask.save((err, result) => {
    if (err) {
      res.json({ err: true });
    } else {
      res.json({ err: false });
    }
  });
};

const delete_task = (req, res) => {
  console.log(req.params.id);
  const taskId = req.params.id;
  taskModule.deleteOne({ _id: taskId }, (err, result) => {
    if (err) {
      return res.json({ err: true });
    } else {
      if (result.deletedCount > 0) {
        return res.json({ err: false });
      } else {
        return res.json({ err: true });
      }
    }
  });
};

module.exports = {
  render_heme_page,
  add_task_to_db,
  get_all_task,
  delete_task,
};
