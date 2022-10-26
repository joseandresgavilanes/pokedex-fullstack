import React from "react";
import "../components/styles/PokedexPopUp.scss";

const PokedexPopUp = ({ handleClosePokedex }) => {
  return (
    <div className="PopUp__pokedex">
      <div className="PopUp__pokedex-left">
        <div className="PopUp__pokedex-lights-container">
          <div className="PopUp__pokedex-lights-lg"></div>
          <div className="PopUp__pokedex-lights-sm-container">
            <div className="PopUp__pokedex-lights-sm-light one"></div>
            <div className="PopUp__pokedex-lights-sm-light two"></div>
            <div claclassNamess="PopUp__pokedex-lights-sm-light three"></div>
          </div>
        </div>

        <div className="PopUp__pokedex-screen-cut"></div>

        <div className="PopUp__pokedex-screen">
          <div className="PopUp__pokedex-screen-top">
            <div className="PopUp__pokedex-screen-light"></div>
            <div className="PopUp__pokedex-screen-light"></div>
          </div>

          <div className="PopUp__pokedex-screen-pixel-container">
            <div className="pixel"></div>
          </div>

          <div className="PopUp__pokedex-screen-bottom">
            <div className="PopUp__pokedex-screen-button"></div>
            <div className="PopUp__pokedex-screen-vents">
              <div className="PopUp__pokedex-screen-vent"></div>
              <div className="PopUp__pokedex-screen-vent"></div>
              <div className="PopUp__pokedex-screen-vent"></div>
              <div className="PopUp__pokedex-screen-vent"></div>
            </div>
          </div>
        </div>

        <div className="PopUp__pokedex-controls">
          <div className="PopUp__pokedex-controls-button"></div>
          <div className="PopUp__pokedex-controls-longButton PopUp__redButton"></div>
          <div className="PopUp__pokedex-controls-longButton PopUp__blueButton"></div>
        </div>

        <div className="PopUp__pokedex-pad">
          <div className="PopUp__pokedex-pad-middle">
            <div className="PopUp__pokedex-pad-middle-circle"></div>
          </div>
          <div className="PopUp__pokedex-pad-v"></div>
          <div className="PopUp__pokedex-pad-h"></div>
        </div>

        <div className="PopUp__pokedex-smallScreen"></div>
      </div>

      <div className="PopUp__pokedex-right">
        <div className="PopUp__pokedex-info-container">
          <h2 className="text__typed">Welcome Krugerian!</h2>
        </div>

        <div className="PopUp__pokedex-buttons-shadow"></div>

        <div className="PopUp__pokedex-buttons">
          <div className="PopUp__pokedex-button PopUp__first"></div>
          <div className="PopUp__pokedex-button"></div>
          <div className="PopUp__pokedex-button"></div>
          <div className="PopUp__okedex-button"></div>
          <div className="PopUp__pokedex-button PopUp__fifth"></div>
          <div className="PopUp__pokedex-button PopUp__sixth"></div>
          <div className="PopUp__pokedex-button"></div>
          <div className="PopUp__pokedex-button"></div>
          <div className="PopUp__pokedex-button"></div>
          <div className="PopUp__pokedex-button PopUp__tenth"></div>
        </div>

        <div className="PopUp__pokedex-longButtons">
          <div className="PopUp__pokedex-longButton"></div>
          <div className="PopUp__pokedex-longButton"></div>
        </div>

        <div className="PopUp__pokedex-dualButtons-shadow"></div>

        <div className="PopUp__pokedex-dualButtons">
          <div className="PopUp__pokedex-dualButton PopUp__first"></div>
          <div className="PopUp__pokedex-dualButton PopUp__second"></div>
        </div>

        <div className="PopUp__pokedex-goldButton"></div>

        <div className="PopUp__pokedex-blackButtons">
          <div className="PopUp__pokedex-blackButton PopUp__pokedex-linkedinButton">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/jose-andres-gavilanes-2954691b5/"
            >
              <h2>Linkedin</h2>
            </a>
          </div>
          <div
            className="PopUp__pokedex-blackButton PopUp__pokedex-closeButton"
            onClick={handleClosePokedex}
          >
            <h2>Close</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokedexPopUp;
