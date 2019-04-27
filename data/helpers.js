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


  return  {
    getUserData,
    getFoodData,
    getOrder,
    getOrdersData,
    insertOrder,
    insertFoodForOrder
  };


}

module.exports = makeHelpers;
