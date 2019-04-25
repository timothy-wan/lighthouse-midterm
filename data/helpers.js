function makeHelpers(knex) {
  const getUserData = (cb) => {
      knex
      .select("*")
      .from("users")
      .asCallback((err, res) => {
        cb(err, res);
      })
  }
  return  {
    getUserData
  };
}

module.exports = makeHelpers;
