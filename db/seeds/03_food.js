
exports.seed = function(knex, Promise) {
  return Promise.all([
    // Inserts seed entries
    knex('foods').insert({id: 1, name: 'Clam', category: 'shellfish', description: 'Fresh clams, sold by the pound', price: 16, unitprice: '/kg',img_src:"/images/clams.jpg"}),
    knex('foods').insert({id: 2, name: 'Lobster', category: 'crustacean', description: 'Cleaned lobster', price: 80, unitprice: '/kg', img_src:"/images/lobster.jpg"}),
    knex('foods').insert({id: 3, name: 'Mussel', category: 'shellfish', description: 'Fresh mussels, sold by the pound', price: 12, unitprice: '/kg', img_src:"/images/mussels.jpg"}),
    knex('foods').insert({id: 4, name: 'Oysters', category: 'shellfish', description: 'Fresh oysters, sold by the pound', price: 24, unitprice: '/kg', img_src:"/images/oysters.jpg"}),
    knex('foods').insert({id: 5, name: 'Prawns', category: 'crustacean', description: 'African prawns, in packs of 12', price: 20, unitprice: '/dozen', img_src:"/images/prawns.jpg"}),
    knex('foods').insert({id: 6, name: 'Sockeye Salmon', category: 'fish', description: 'Caught from the Pacific Northwest', price: 35, unitprice: '/kg',img_src:"/images/salmon.jpg"}),
    knex('foods').insert({id: 7, name: 'Pacific Crab', category: 'crustacean', description: 'Local Crab', price: 30, unitprice: '/kg', img_src:"/images/crab2.png"}),
    knex('foods').insert({id: 8, name: 'Southern Pacific Crab', category: 'crustacean', description: 'Great for crab cakes', price: 26, unitprice: '/kg', img_src:"/images/crab3.png"}),
    knex('foods').insert({id: 9, name: 'Orange Fisk', category: 'fish', description: 'Small rich fish', price: 22, unitprice: '/kg', img_src:"/images/orangefisk.png"}),
    knex('foods').insert({id: 10, name: 'Pink Salmon', category: 'fish', description: 'Freshly caught local salmon', unitprice: '/kg', price: 30, img_src:"/images/salmon2.png"}),
    knex('foods').insert({id: 11, name: 'Shrimp', category: 'crustacean', description: 'California shramp', price: 22, unitprice: '/dozen',img_src:"/images/shrimp.png"}),
    knex('foods').insert({id: 12, name: 'Razor Clam', category: 'shellfish', description: 'Local razor clam', price: 24, unitprice: '/kg', img_src:"/images/razorclam.png"}),
    knex('foods').insert({id: 13, name: 'Mackerel', category: 'fish', description: 'Great for smoking', price: 26, unitprice: '/kg', img_src:"/images/mackerel.png"}),
    knex('foods').insert({id: 14, name: 'Red Snapper', category: 'fish', description: 'A tasty classic', price: 32, unitprice: '/kg', img_src:"/images/redsnapper.png"}),
    knex('foods').insert({id: 15, name: 'Manila Clam', category: 'shellfish', description: 'Invasive Tastiness', price: 20, unitprice: '/kg', img_src:"/images/manilaclam.png"}),
    knex('foods').insert({id: 16, name: 'Rainbow Trout', category: 'fish', description: 'Leprechaun Favourite', price: 24, unitprice: '/kg', img_src:"/images/rainbowtrout.png"}),
    knex('foods').insert({id: 17, name: 'Mountain Dew', category: 'beverages', description: 'Soda Pop', price: 8, unitprice: '/6pack', img_src:"/images/mountaindew.png"}),
    knex('foods').insert({id: 18, name: 'Crab Juice', category: 'beverages', description: 'Pairs well with Khlav Kalash', price: 12, unitprice: '/6pack', img_src:"/images/crabjuice.png"}),
  ]);
};


