exports.up = function (knex) {
  return knex.schema.createTable("food", (table) => {
    table.increments("id").unique();
    table.string("name");
    table.integer("protein");
    table.integer("Carbs");
    table.integer("Trans_Fat");
    table.integer("Sugar");
    table.integer("Calories");
    table.integer("Sodium");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("food");
};
