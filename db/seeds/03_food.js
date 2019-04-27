
exports.seed = function(knex, Promise) {
  return Promise.all([
    // Inserts seed entries
    knex('foods').insert({id: 1, name: 'Clam', category: 'shellfish', description: 'Fresh clams, sold by the pound', price: 10, unitprice: '/kg',img_src:"/images/clams.jpg"}),
    knex('foods').insert({id: 2, name: 'Lobster', category: 'crustacean', description: 'Cleaned lobster', price: 15, unitprice: '/kg', img_src:"/images/lobster.jpg"}),
    knex('foods').insert({id: 3, name: 'Mussel', category: 'shellfish', description: 'Fresh mussels, sold by the pound', price: 4, unitprice: '/kg', img_src:"/images/mussels.jpg"}),
    knex('foods').insert({id: 4, name: 'Oysters', category: 'shellfish', description: 'Fresh oysters, sold by the pound', price: 15, unitprice: '/kg', img_src:"/images/oysters.jpg"}),
    knex('foods').insert({id: 5, name: 'Prawns', category: 'crustacean', description: 'African prawns, in packs of 12', price: 15, unitprice: '/dozen', img_src:"/images/prawns.jpg"}),
    knex('foods').insert({id: 6, name: 'Sockeye Salmon', category: 'fish', description: 'Caught from the Pacific Northwest', price: 100, unitprice: '/kg',img_src:"/images/salmon.jpg"}),
    knex('foods').insert({id: 7, name: 'Pacific Crab', category: 'crustacean', description: 'Local Crab', price: 100, unitprice: '/kg', img_src:"/images/crab2.png"}),
    knex('foods').insert({id: 8, name: 'Southern Pacific Crab', category: 'crustacean', description: 'Great for crab cakes', price: 100, unitprice: '/kg', img_src:"/images/crab3.png"}),
    knex('foods').insert({id: 9, name: 'Orange Fisk', category: 'fish', description: 'Small rich fish', price: 100, unitprice: '/kg', img_src:"/images/orangefisk.png"}),
    knex('foods').insert({id: 10, name: 'Pink Salmon', category: 'fish', description: 'Freshly caught local salmon', unitprice: '/kg', price: 100, img_src:"/images/salmon2.png"}),
    knex('foods').insert({id: 11, name: 'Shrimp', category: 'crustacean', description: 'California shramp', price: 15, unitprice: '/dozen',img_src:"/images/shrimp.png"}),
    knex('foods').insert({id: 12, name: 'Razor Clam', category: 'shellfish', description: 'Local razor clam', price: 10, unitprice: '/kg', img_src:"/images/razorclam.png"}),
    knex('foods').insert({id: 13, name: 'Mackerel', category: 'fish', description: 'Great for smoking', price: 100, unitprice: '/kg', img_src:"/images/mackerel.png"}),
    knex('foods').insert({id: 14, name: 'Red Snapper', category: 'fish', description: 'A tasty classic', price: 100, unitprice: '/kg', img_src:"/images/redsnapper.png"}),
    knex('foods').insert({id: 15, name: 'Manila Clam', category: 'shellfish', description: 'Invasive Tastiness', price: 10, unitprice: '/kg', img_src:"/images/manilaclam.png"}),
    knex('foods').insert({id: 16, name: 'Rainbow Trout', category: 'fish', description: 'Leprechaun Favourite', price: 100, unitprice: '/kg', img_src:"/images/rainbowtrout.png"}),
  ]);
};


