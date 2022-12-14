import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import PokemonCard from "./Pokedex/PokemonCard";
import SearchInput from "./Pokedex/SearchInput";
import SelectType from "./Pokedex/SelectType";
import HeaderPoke from "./shared/HeaderPoke";
import "./styles/pokedex.css";

const Pokedex = () => {
  const [pokemons, setPokemons] = useState();
  const [pokeSearch, setPokeSearch] = useState();
  const [optionType, setOptionType] = useState("All");

  useEffect(() => {
    if (optionType !== "All") {
      const URL = `https://pokeapi.co/api/v2/type/${optionType}/`;
      axios
        .get(URL)
        .then((res) => {
          const arr = res.data.pokemon.map((e) => e.pokemon);
          setPokemons({ results: arr });
        })
        .catch((err) => console.log(err));
    } else if (pokeSearch) {
      const url = `https://pokeapi.co/api/v2/pokemon/${pokeSearch}`;

      const obj = {
        results: [{ url }],
      };
      setPokemons(obj);
    } else {
      const URL = "https://pokeapi.co/api/v2/pokemon";
      axios
        .get(URL)
        .then((res) => setPokemons(res.data))
        .catch((err) => console.log(err));
    }
  }, [pokeSearch, optionType]);

  const nameTrainer = useSelector((state) => state.nameTrainer);

  return (
    <div className="Pokedex">
      <HeaderPoke />
      <h2>
        Welcome <span>{nameTrainer}</span>, catch them all!
      </h2>
      <SearchInput
        setPokeSearch={setPokeSearch}
        setOptionType={setOptionType}
      />
      <SelectType
        optionType={optionType}
        setOptionType={setOptionType}
        setPokeSearch={setPokeSearch}
      />
      <div className="cards-container">
        {pokemons?.results.map((pokemon) => (
          <PokemonCard key={pokemon.url} url={pokemon.url} />
        ))}
      </div>
    </div>
  );
};

export default Pokedex;
