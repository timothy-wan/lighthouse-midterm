function makeHelpers(knex) {
  const getUserData = (cb) => {
    knex
    .select("*")
    .from("users")
    .asCallback((err, res) => {
      cb(err, res);
    })
  }
  const getFoodData = (cb) => {
    knex
    .select("*")
    .from("foods")
    .asCallback((err, res) => {
      cb(err, res);
    })
  }
  const getOrdersData = (cb) => {
    knex
    .select("*")
    .from("orders")
    .asCallback((err, res) => {
      cb(err, res);
    })
  }
  const insertOrder = (newid, user) => {
    knex('orders')
    .insert({
      id: newid,
      created: new Date(),
      userid: user
    })
  }
  const insertFoodForOrder = (newid, amount, order, food) => {
    knex('orders_foods')
    .insert({
      id: newid,
      quantity: amount,
      ordersid: order,
      foodsid: food   
    })
  }


  return  {
    getUserData,
    getFoodData,
    getOrdersData,
    insertOrder,
    insertFoodForOrder
  };
  
  
}

module.exports = makeHelpers;
