const router = require("express").Router();
const task = require("./task-model");

router.get("/", async (req, res) => {
  try {
    const allTask = await task.getTask();
    res.status(200).json({ message: "Got all Tasks", Tasks: allTask });
  } catch (e) {
    res.status(500).json({ message: "could not get tasks", error: e });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const task = await task.getTaskById(req.params.id);
    res.status(200).json({ message: "got task by specific id", Task: task });
  } catch (e) {
    res.status(500).json({ message: "coould not get task", error: e });
  }
});

router.post("/add", async (req, res) => {
  try {
    const createTask = await task.createTask(req.body);
    res.status(200).json({ message: "created a task", task: createTask });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      message: "could not create a task",
      error: e,
    });
  }
});

module.exports = router;
