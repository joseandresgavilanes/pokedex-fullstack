import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import StatPokemon from "./StatPokemon";
import "./style/pokemonCard.css";

const PokemonCard = ({ url }) => {
  const [pokemon, setPokemon] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(url)
      .then((res) => setPokemon(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleClick = () => navigate(`/pokedex/${pokemon.name}`);

  return (
    <article
      onClick={handleClick}
      className={`card color-${pokemon?.types[0].type.name}`}
    >
      <header className={`card__header bg-${pokemon?.types[0].type.name}`}>
        <i class="card__moreInfo fa-solid fa-circle-info"></i>
        <img
          className="card__kImg"
          src="https://krugercorp.com/wp-content/uploads/2022/02/KRUGER-icon-blanco-03.png"
          alt="kruger corp logo"
        />
        <img
          className="card__avatar"
          src={pokemon?.sprites.other.home["front_default"]}
          alt={pokemon?.name}
        />
      </header>
      <section className="card__body">
        <h3 className={`card__name color-text-${pokemon?.types[0].type.name}`}>
          {pokemon?.name}
        </h3>
        <ul className="card__list-type">
          {pokemon?.types.map((slot) => (
            <li className="card__item-type" key={slot.type.url}>
              {slot.type.name}
            </li>
          ))}
        </ul>
      </section>
      <hr className="card__hr" />
      <footer className="card__footer">
        <ul className="card__list-stats">
          {pokemon?.stats.map((stat) => (
            <StatPokemon
              key={stat.stat.url}
              infoStat={stat}
              color={pokemon?.types[0].type.name}
            />
          ))}
        </ul>
      </footer>
    </article>
  );
};

export default PokemonCard;
