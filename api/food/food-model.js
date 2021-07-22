const db = require("../../database/config");

module.exports = {
  getFoods,
  getFoodById,
  addFood,
  deleteFood,
  updateFood,
};

function getFoods() {
  return db("food");
}

function getFoodById(id) {
  return db("food").where("id", id).first();
}

function addFood(food) {
  return db("food")
    .insert(food, "id")
    .then(([id]) => {
      return getFoodById(id);
    });
}
