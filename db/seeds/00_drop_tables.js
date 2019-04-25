exports.seed = function(knex, Promise) {
  return Promise.all([
    knex('orders_foods').del(),
    knex('foods').del(),
    knex('orders').del(),
    knex('users').del()
  ]) 
};