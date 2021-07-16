const db = require("../database/config");

module.exports = {
  getTask,
  getTaskById,
  createTask,
  deleteTask,
  updateTask,
};

function getTask() {
  return db("tasks");
}

function getTaskById(id) {
  return db("tasks").where("id", id).first();
}
