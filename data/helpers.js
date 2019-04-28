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
      status: 'pending',
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
      status: 'confirmed',
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
    .where('orders.status', 'pending' )
    .returning('id')
    .then((id) => {
      return Promise.resolve(id);
    })
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
    getPendingOrders
  };


}

module.exports = makeHelpers;
