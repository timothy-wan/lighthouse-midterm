
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('orders').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('orders').insert({id: 1, created: new Date('2019-04-10'), fulfilled: new Date('2019-04-11'), userid: 1}),
        knex('orders').insert({id: 2, created: new Date('2019-04-11'), fulfilled: new Date('2019-04-12'), userid: 1}),
        knex('orders').insert({id: 3, created: new Date('2019-04-13'), fulfilled: new Date('2019-04-14'), userid: 2})
      ]);
    });
};
