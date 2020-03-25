const knex = require("knex");
const configuration = require("../../knexfile");

// Conecção de development
const connection = knex(configuration.development);

module.exports = connection;
