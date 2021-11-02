const express = require("express");
const homeControllers = require("../controllers/homeControllers");

const route = express.Router();

route.get("/", homeControllers.render_heme_page);
route.post("/task", homeControllers.add_task_to_db);
route.get("/task", homeControllers.get_all_task);
route.delete("/task/:id", homeControllers.delete_task);
module.exports = route;
