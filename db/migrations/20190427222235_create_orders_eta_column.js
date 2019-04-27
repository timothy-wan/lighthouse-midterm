exports.up = function(knex, Promise) {
  if(knex.schema.hasTable('orders')) {
    return Promise.all([
      knex.schema.table('orders', (table) => {
        table.string('eta');
      })
    ])
  }
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('orders', (table) => {
      if(knex.schema.hasColumn('eta')) {
        table.dropColumn('eta');
      }
    })
  ])
};
