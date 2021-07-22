exports.up = function (knex) {
  return knex.schema.createTable("food", (table) => {
    table.increments("id").unique();
    table.string("name");
    table.string("protein");
    table.string("Carbohydrates");
    table.string("Fat");
    table.string("Sugar");
    table.string("Saturated Fat");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("food");
};
