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
