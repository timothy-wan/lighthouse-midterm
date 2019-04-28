function makeHelpers(knex) {
  const getUserData = () => {
    return knex
    .select("*")
    .from("users")
    .returning('id')
    .then((id) => {
      return Promise.resolve(id);
    })
  }
  const getFoodData = () => {
    return knex
    .select("*")
    .from("foods")
    .returning('id')
    .then((id) => {
      return Promise.resolve(id);
    })
  }

  const getOrder = (id) => {
    return knex
    .select("*")
    .from("orders")
    .where('id', id)
    .returning('id')
    .then((id) => {
      return Promise.resolve(id);
    })
  }
  const getCartData = (id) => {
    return knex('orders_foods')
    .join('foods', 'foodsid', '=', 'foods.id')
    .select("*")
    .where('ordersid', id)
    .returning('id')
    .then((id) => {
      return Promise.resolve(id);
    })
  }

  const getOrdersData = () => {
    return knex
    .select("*")
    .from("orders")
    .returning('id')
    .then((id) => {
      return Promise.resolve(id);
    })
  }

  const insertOrder = (newid, user) => {
    return knex('orders')
    .insert({
      id: newid,
      created: new Date(),
      status: 'Pending',
      eta: 'N/A',
      userid: user
    })
    .returning('id')
    .then((id)=>{
      return Promise.resolve(id);
    })
  }
  const insertFoodForOrder = (values) => {
    return knex('orders_foods')
    .insert(values)
    .returning('id')
    .then((id) =>{
      return Promise.resolve(id);
    })
  }

  const alterOrderStatus = (idToEdit, eta) => {
    return knex('orders')
    .where('id','=', idToEdit)
    .update({
      status: 'Confirmed',
      eta: eta
    }).returning('*')
    .then((id) => {
      return Promise.resolve(id);
    })
  }

  const getPendingOrders = () => {
    return knex('orders')
    .join('orders_foods', 'orders.id', '=', 'ordersid')
    .join('foods', 'foodsid', '=', 'foods.id')
    .join('users', 'users.id', '=', 'userid')
    .where('orders.status', 'Pending' )
    .returning('id')
    .then((id) => {
      return Promise.resolve(id);
    })
  }

  const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max)) + 1;
  }

  return  {
    getUserData,
    getFoodData,
    getOrder,
    getCartData,
    getOrdersData,
    insertOrder,
    insertFoodForOrder,
    alterOrderStatus,
    getPendingOrders,
    getRandomInt
  };


}

module.exports = makeHelpers;
