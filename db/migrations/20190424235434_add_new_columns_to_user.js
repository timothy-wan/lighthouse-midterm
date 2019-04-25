
exports.up = function(knex, Promise) {
  if(knex.schema.hasTable('users')) {
    return Promise.all([
      knex.schema.table('users', (table) => {
        table.string('phone_number');
        table.string('email').unique();
      })
    ])
  }
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('users', (table) => {
      if(knex.schema.hasColumn('phone_number')) {
        table.dropColumn('phone_number');
      }
      if(knex.schema.hasColumn('email')) {
        table.dropColumn('email');
      }
    })
  ])
};
