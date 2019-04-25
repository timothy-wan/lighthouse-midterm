
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('foods').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('foods').insert({id: 1, name: 'Cake', description: 'good food', price: 2.50}),
        knex('foods').insert({id: 2, name: 'Chocolate Cookie', description: 'good food', price: 2.50}),
        knex('foods').insert({id: 3, name: 'Fruit Tart', description: 'good food', price: 2.50})
      ]);
    });
};
