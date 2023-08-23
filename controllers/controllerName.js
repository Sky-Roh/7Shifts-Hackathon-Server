const knex = require("knex")(require("../knexfile"));

// Get all with some table
/*
const get = (req, res) => {
  knex("tablename1")
    .select(
      "field"
    )
    .then((data) => {
      res.status(200).json(data);
    })
    .catch(() => {
      return res.status(500).json({
        message: `Error with Fetching data`,
      });
    });
};
*/

module.exports = { // getAll, add, getSingle, edit, delete
};
