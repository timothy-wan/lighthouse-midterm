exports.up = function(knex, Promise) { // eslint-disable-line no-unused-vars
  return knex.schema.createTable('foods', function (table) {
    table.increments();
    table.string('name');
    table.string('description');
    table.decimal('price').notNullable();
  });
};

exports.down = function(knex, Promise) { // eslint-disable-line no-unused-vars
  return knex.schema.dropTable('foods');
};
