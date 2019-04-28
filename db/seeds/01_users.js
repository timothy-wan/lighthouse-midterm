exports.seed = function(knex, Promise) {
  return Promise.all([
    knex('users').insert({id: 1, username: 'Kanye West', phone_number: '778-111-1111', email: 'user@example.com'}),
    knex('users').insert({id: 2, username: 'Homer Simpson', phone_number: '604-000-0000', email: 'user2@example.com'}),
    knex('users').insert({id: 3, username: 'Peter Nguyen', phone_number: '604-222-2222', email: 'user3@example.com'})
  ]);
};
