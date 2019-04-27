exports.up = function(knex, Promise) {
  if(knex.schema.hasTable('orders')) {
    return Promise.all([
      knex.schema.table('orders', (table) => {
        table.string('status');
      })
    ])
  }
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('orders', (table) => {
      if(knex.schema.hasColumn('status')) {
        table.dropColumn('status');
      }
    })
  ])
};