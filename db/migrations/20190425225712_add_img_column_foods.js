exports.up = function(knex, Promise) {
  if(knex.schema.hasTable('foods')) {
    return Promise.all([
      knex.schema.table('foods', (table) => {
        table.string('img_src');
      })
    ])
  }
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('foods', (table) => {
      if(knex.schema.hasColumn('img_src')) {
        table.dropColumn('img_src');
      }
    })
  ])
};