
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return Promise.all([
    // Inserts seed entries
    knex('orders_foods').insert({id: 1, quantity: 2, ordersid: 1, foodsid: 2}),
    knex('orders_foods').insert({id: 2, quantity: 1, ordersid: 1, foodsid: 3}),
    knex('orders_foods').insert({id: 3, quantity: 1, ordersid: 1, foodsid: 1}),
    knex('orders_foods').insert({id: 4, quantity: 1, ordersid: 2, foodsid: 2}),
    knex('orders_foods').insert({id: 5, quantity: 1, ordersid: 3, foodsid: 1}),
  ]);
};
