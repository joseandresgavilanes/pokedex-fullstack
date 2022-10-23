import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";

import "./styles/pokemonDetails.css";

const PokemonDetails = () => {
  const [pokeInfo, setPokeInfo] = useState();

  const { name } = useParams();

  useEffect(() => {
    const URL = `https://pokeapi.co/api/v2/pokemon/${name}/`;
    axios
      .get(URL)
      .then((res) => setPokeInfo(res.data))
      .catch((err) => console.log(err));
  }, []);

  console.log(pokeInfo);

  return (
    <section
      className={`pokemon__background bg__${pokeInfo?.types[0].type.name}`}
    >
      <NavLink className="goBack" to="/pokedex">
        <i class="fa-solid fa-circle-xmark"></i>
      </NavLink>
      <section className="pokemon__fullDetails">
        <article className={`pokemon__card`}>
          <div className="pokemon__infoDetails">
            <img
              className="pokemon__card__avatar"
              src={pokeInfo?.sprites.other.home.front_default}
              alt=""
            />
            <h1 className={`color-text-${pokeInfo?.types[0].type.name}`}>
              {name}
            </h1>
            <div className="pokemon__basic">
              <div>
                <p>Weight</p> <span>{pokeInfo?.weight}</span>{" "}
              </div>
              <div>
                <p>Height</p> <span>{pokeInfo?.height}</span>{" "}
              </div>
            </div>
          </div>

          <div className={`pokemon__stats`}>
            <div className={`pokemon__features`}>
              <div className={`pokemon__type`}>
                <h2 className={`color-text-${pokeInfo?.types[0].type.name}`}>
                  Type
                </h2>
                <ul>
                  {pokeInfo?.types.map((slot) => (
                    <li className={`bg-${slot.type.name}`} key={slot.type.url}>
                      {slot.type.name}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pokemon__abilities">
                <h2 className={`color-text-${pokeInfo?.types[0].type.name}`}>
                  Abilities
                </h2>
                <ul>
                  {pokeInfo?.abilities.map((item) => (
                    <li
                      className={`bg-${pokeInfo?.types[0].type.name}`}
                      key={item.ability.url}
                    >
                      {item.ability.name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pokemon__cardStats">
              <h2 className={`color-text-${pokeInfo?.types[0].type.name}`}>
                Stats
              </h2>
              <ul>
                {pokeInfo?.stats.map((slot) => (
                  <li key={slot.stat.url}>
                    <div className="stat__name">{slot.stat.name}:</div>
                    <div className={`stat__bar`}>
                      <div
                        className={`progrss__bar stat__bar bg-${pokeInfo?.types[0].type.name}`}
                        style={{
                          height: "100%",
                          width: `${slot["base_stat"] / 2}%`,
                          transition: "width 0.5s",
                        }}
                      >
                        <h4 className="stat__number">
                          {slot["base_stat"]} / 200
                        </h4>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </article>

        <div className="pokemon__movements">
          <h2 className={`color-text-${pokeInfo?.types[0].type.name}`}>
            Movements
          </h2>
          <ul>
            {pokeInfo?.moves.map((movement) => (
              <li key={movement.move.url}>{movement.move.name}</li>
            ))}
          </ul>
        </div>
      </section>
    </section>
  );
};

export default PokemonDetails;
