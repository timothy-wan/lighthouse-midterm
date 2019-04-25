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

  return  {
    getUserData,
    getFoodData
  };
  
  
}

module.exports = makeHelpers;
