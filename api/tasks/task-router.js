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

module.exports = router;
