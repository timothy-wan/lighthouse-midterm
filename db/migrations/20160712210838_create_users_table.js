exports.up = function(knex, Promise) { // eslint-disable-line no-unused-vars
  return knex.schema.createTable('users', function (table) {
    table.increments();
    table.string('name');
  });
};

exports.down = function(knex, Promise) { // eslint-disable-line no-unused-vars
  return knex.schema.dropTable('users');
};
