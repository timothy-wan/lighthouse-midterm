
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('orders', (table) => {
      table.increments();
      table.date('created').notNullable();
      table.date('fulfilled');
      table.integer('userid').unsigned();
      table.foreign('userid').references('id').inTable('users');
    })
  ])
};

exports.down = function(knex, Promise) {
  if(knex.schema.hasTable('orders')) {
    return Promise.all([
      knex.schema.dropTable('orders')
    ]) 
  }
};
