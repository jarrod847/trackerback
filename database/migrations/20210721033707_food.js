exports.up = function (knex) {
  return knex.schema.createTable("food", (table) => {
    table.increments("id").unique();
    table.string("name");
    table.string("protein");
    table.string("Carbohydrates");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("food");
};
