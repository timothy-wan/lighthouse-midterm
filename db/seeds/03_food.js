
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return Promise.all([
    // Inserts seed entries
    knex('foods').insert({id: 1, name: 'Clam', description: 'Fresh clams, sold by the pound', price: 10, img_src:"/images/clams.jpg"}),
    knex('foods').insert({id: 2, name: 'Lobster', description: 'Cleaned lobster', price: 15, img_src:"/images/lobster.jpg"}),
    knex('foods').insert({id: 3, name: 'Mussel', description: 'Fresh mussels, sold by the pound', price: 4, img_src:"/images/mussels.jpg"}),
    knex('foods').insert({id: 4, name: 'Oysters', description: 'Fresh oysters, sold by the pound', price: 15, img_src:"/images/oysters.jpg"}),
    knex('foods').insert({id: 5, name: 'Prawns', description: 'African prawns, in packs of 12', price: 15, img_src:"/images/prawns.jpg"}),
    knex('foods').insert({id: 6, name: 'Sockeye Salmon', description: 'Caught from the Pacific Northwest', price: 100, img_src:"/images/salmon.jpg"})
  ]);
};