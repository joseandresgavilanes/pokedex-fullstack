const Users = require("./users.models");
const Pokemons = require("./pokemons.models");
const Types = require("./types.models");

const initModels = () => {
  //* 1 -> M
  Pokemons.belongsTo(Users);
  Users.hasMany(Pokemons);

  //* 1 -> M
  Pokemons.belongsTo(Types);
  Types.hasMany(Pokemons);
};

module.exports = initModels;
