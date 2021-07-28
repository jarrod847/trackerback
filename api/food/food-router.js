const router = require("express").Router();
const food = require("./food-model");

router.get("/", async (req, res) => {
  try {
    const allFood = await food.getFoods();
    res.status(200).json({ message: "Got all Food", Food: allFood });
  } catch (e) {
    res.status(500).json({ message: "could not get food", error: e });
  }
});

router.post("/add", async (req, res) => {
  try {
    const addFood = await food.addFood(req.body);
    res.status(200).json({ message: "added food", food: addFood });
  } catch (e) {
    res.status(500).json({ message: "could not add food" });
  }
});

module.exports = router;
