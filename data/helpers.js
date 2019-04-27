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

  const getOrder = (id, cb) => {
    knex
    .select("*")
    .from("orders")
    .where('id', id)
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
  const insertFoodForOrder = (newid, amount, order, food) => {
    knex('orders_foods')
    .insert({
      id: newid,
      quantity: amount,
      ordersid: order,
      foodsid: food
    })
  }
  const generateRandomString = () => {
    let text = '';
    let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for(let i = 0; i < 6; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }


  return  {
    getUserData,
    getFoodData,
    getOrder,
    getOrdersData,
    insertOrder,
    insertFoodForOrder,
    generateRandomString
  };


}

module.exports = makeHelpers;
