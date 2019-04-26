exports.seed = function(knex, Promise) {
  return Promise.all([
    // Inserts seed entries
    knex('orders').insert({id: 1, created: new Date('Thu Apr 25 2019 17:50:08 GMT-0700 (Pacific Daylight Time)'), fulfilled: new Date('Thu Apr 25 2019 17:50:08 GMT-0700 (Pacific Daylight Time)'), userid: 1}),
    knex('orders').insert({id: 2, created: new Date('2019-04-11'), fulfilled: new Date('2019-04-12'), userid: 1}),
    knex('orders').insert({id: 3, created: new Date('2019-04-13'), fulfilled: new Date('2019-04-14'), userid: 2})
  ]);

};
