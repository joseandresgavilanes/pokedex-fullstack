const pokemonControllers = require("./pokemons.controller");

const getAllPokemons = (req, res) => {
  pokemonControllers
    .getAllPokemons()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
};

const getPokemonById = (req, res) => {
  const id = req.params.id;
  pokemonControllers
    .getPokemonById(id)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => res.status(404).json({ message: err.message }));
};

const createPokemon = (req, res) => {
  //? Este es el id del usuario loggeado
  const userId = req.user.id;
  const {
    name,
    description,
    evolution,
    height,
    weight,
    image,
    hp,
    attack,
    defense,
    speed,
    typeId,
  } = req.body;
  if (
    name &&
    description &&
    evolution &&
    height &&
    weight &&
    image &&
    hp &&
    attack &&
    defense &&
    speed &&
    typeId
  ) {
    pokemonControllers
      .createPokemon({
        name,
        description,
        evolution,
        height,
        weight,
        image,
        hp,
        attack,
        defense,
        speed,
        typeId,
        userId,
      })
      .then((data) => {
        res.status(201).json(data);
      })
      .catch((err) => {
        res.status(400).json(err.message);
      });
  } else {
    res.status(400).json({
      message: "Missing Data",
      fields: {
        name: "string",
        description: "string",
        evolution: "string",
        height: "integer",
        weight: "integer",
        image: "string",
        hp: "integer",
        attack: "integer",
        defense: "integer",
        speed: "integer",
        typeId: "uuid",
      },
    });
  }
};

const getPokemonsByType = (req, res) => {
  const typeId = req.params.id;
  pokemonControllers
    .getPokemonsByType(typeId)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
};

module.exports = {
  getAllPokemons,
  getPokemonById,
  getPokemonsByType,
  createPokemon,
};
