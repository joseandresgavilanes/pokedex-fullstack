import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setNameTrainer } from "../store/slices/nameTrainer.slice";
import PokedexPopUp from "./PokedexPopUp";
import FooterPoke from "./shared/FooterPoke";
import "./styles/home.css";

const Home = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputValue = e.target.name.value.trim();

    if (inputValue.length !== 0) {
      dispatch(setNameTrainer(inputValue));
      navigate("/pokedex");
    }
    e.target.name.value = "";
  };

  const [isPokedexOpen, setIsPokedexOpen] = useState(false);

  const handleOpenPokedex = () => {
    setIsPokedexOpen(true);
  };

  const handleClosePokedex = () => {
    setIsPokedexOpen(false);
  };

  return (
    <div className="home">
      <div className="pokeball__container">
        <img
          onClick={handleOpenPokedex}
          className="pokeball"
          src="/images/Home/pokeball.png"
          alt="Pokedex Logo"
        />
        <div className="clickMe">Click me!</div>
      </div>
      {isPokedexOpen && (
        <div className="home__pokedexPopUp">
          <PokedexPopUp handleClosePokedex={handleClosePokedex} />
        </div>
      )}
      <img
        className="home__img"
        src="/images/Home/pokedex.png"
        alt="Pokedex Logo"
      />
      <h1 className="home__title">What's up Krugerian!</h1>
      <p className="home__description">To start enter your name</p>
      <form className="home__form" onSubmit={handleSubmit}>
        <input
          placeholder="Your K-name"
          className="home__input"
          id="name"
          type="text"
        />
        <button className="home__btn">GO!</button>
      </form>
      <FooterPoke />
    </div>
  );
};

export default Home;
