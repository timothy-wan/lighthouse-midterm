exports.up = function(knex, Promise) {
  if(knex.schema.hasTable('foods')) {
    return Promise.all([
      knex.schema.table('foods', (table) => {
        table.string('unitprice');
      })
    ])
  }
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('foods', (table) => {
      if(knex.schema.hasColumn('unitprice')) {
        table.dropColumn('unitprice');
      }
    })
  ])
};