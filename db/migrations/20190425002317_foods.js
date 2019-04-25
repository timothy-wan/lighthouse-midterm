exports.up = function(knex, Promise) {
  return knex.schema.createTable('foods', function (table) {
    table.increments();
    table.string('name');
    table.string('description');
    table.decimal('price').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('foods');
};
