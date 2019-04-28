exports.up = function(knex, Promise) {
  if(knex.schema.hasTable('users')) {
    return Promise.all([
      knex.schema.table('users', (table) => {
        table.renameColumn('name','username');
      })
    ])
  }
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('users', (table) => {
      if(knex.schema.hasColumn('username')) {
        table.renameColumn('username', 'name');
      }
    })
  ])
};
