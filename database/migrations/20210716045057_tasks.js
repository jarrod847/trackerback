exports.up = function (knex) {
  return knex.schema.createTable("tasks", (table) => {
    table.increments("id").unique();
    table.string("name");
    table.string("created_at");
    table.string("updated_at");
    table.boolean("completed").defaultTo(false);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("tasks");
};
