exports.seed = function(knex, Promise) {
  return Promise.all([
    // Inserts seed entries
    knex('orders').insert({id: 1, created: new Date('Thu Apr 25 2019 17:50:08 GMT-0700 (Pacific Daylight Time)'), fulfilled: new Date('Thu Apr 25 2019 17:50:08 GMT-0700 (Pacific Daylight Time)'), status: 'confirmed',userid: 1}),
    knex('orders').insert({id: 2, created: new Date('2019-04-11'), fulfilled: new Date('2019-04-12'), status: 'confirmed',userid: 1}),
    knex('orders').insert({id: 3, created: new Date('2019-04-13'), fulfilled: new Date('2019-04-14'), status: 'confirmed', userid: 2}),
    knex('orders').insert({id: 4, created: new Date('2019-05-02'), fulfilled: null, status: 'unconfirmed', userid: 2}),
    knex('orders').insert({id: 5, created: new Date('2019-05-03'), fulfilled: null, status: 'unconfirmed', userid: 2})
  ]);

};
