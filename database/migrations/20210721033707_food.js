exports.up = function (knex) {
  return knex.schema.createTable("food", (table) => {
    table.increments("id").unique();
    table.string("name");
    table.string("protein");
    table.string("Carbs");
    table.string("Trans Fat");
    table.string("Sugar");
    table.string("Calories");
    table.string("Sodium");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("food");
};
