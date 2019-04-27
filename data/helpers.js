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
  const insertOrder = (newid, user, cb) => {
    knex('orders')
    .insert({
      id: newid,
      created: new Date(),
      status: 'unconfirmed',
      userid: user
    }).asCallback((err, res) => {
      cb(err,res);
    })
  }
  const insertFoodForOrder = (values, cb) => {
    knex.insert(values).into('orders_foods').asCallback((err, res) => {
      cb(err, res);
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
