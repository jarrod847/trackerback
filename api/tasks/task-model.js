const db = require("../../database/config");

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

function createTask(task) {
  return db("tasks")
    .insert(task, "id")
    .then(([id]) => {
      return getTaskById(id);
    });
}

function deleteTask(id) {
  return getTaskById(id).del();
}

function updateTask(id, changes) {
  return getTaskById(id).update(changes);
}
