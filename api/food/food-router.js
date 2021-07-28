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

router.get("/:id", async (req, res) => {
  try {
    const foodinfo = await food.getFoodById(req.params.id);
    res.status(200).json({ message: "got food by id", Food: foodinfo });
  } catch (e) {
    res.status(500).json({ message: "coould not food", error: e });
  }
});

module.exports = router;
