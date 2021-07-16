exports.up = function (knex) {
  return knex.schema.createTable("tasks", (table) => {
    table.increments("id").unique();
    table.string("name");
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());
    table.boolean("completed").defaultTo(false);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("tasks");
};
