function makeHelpers(knex) {
  const getUserData = () => {
      knex
      .select("*")
      .from("users")
      .then((results) => {
        console.log(results);
    });
  }
  return  {
    getUserData
  };
}

module.exports = makeHelpers;
