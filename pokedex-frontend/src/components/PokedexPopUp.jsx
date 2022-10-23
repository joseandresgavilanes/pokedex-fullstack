import React from "react";
import "../components/styles/PokedexPopUp.scss";

const PokedexPopUp = ({ handleClosePokedex }) => {
  return (
    <div class="PopUp__pokedex">
      <div class="PopUp__pokedex-left">
        <div class="PopUp__pokedex-lights-container">
          <div class="PopUp__pokedex-lights-lg"></div>
          <div class="PopUp__pokedex-lights-sm-container">
            <div class="PopUp__pokedex-lights-sm-light one"></div>
            <div class="PopUp__pokedex-lights-sm-light two"></div>
            <div class="PopUp__pokedex-lights-sm-light three"></div>
          </div>
        </div>

        <div class="PopUp__pokedex-screen-cut"></div>

        <div class="PopUp__pokedex-screen">
          <div class="PopUp__pokedex-screen-top">
            <div class="PopUp__pokedex-screen-light"></div>
            <div class="PopUp__pokedex-screen-light"></div>
          </div>

          <div class="PopUp__pokedex-screen-pixel-container">
            <div className="pixel"></div>
          </div>

          <div class="PopUp__pokedex-screen-bottom">
            <div class="PopUp__pokedex-screen-button"></div>
            <div class="PopUp__pokedex-screen-vents">
              <div class="PopUp__pokedex-screen-vent"></div>
              <div class="PopUp__pokedex-screen-vent"></div>
              <div class="PopUp__pokedex-screen-vent"></div>
              <div class="PopUp__pokedex-screen-vent"></div>
            </div>
          </div>
        </div>

        <div class="PopUp__pokedex-controls">
          <div class="PopUp__pokedex-controls-button"></div>
          <div class="PopUp__pokedex-controls-longButton PopUp__redButton"></div>
          <div class="PopUp__pokedex-controls-longButton PopUp__blueButton"></div>
        </div>

        <div class="PopUp__pokedex-pad">
          <div class="PopUp__pokedex-pad-middle">
            <div class="PopUp__pokedex-pad-middle-circle"></div>
          </div>
          <div class="PopUp__pokedex-pad-v"></div>
          <div class="PopUp__pokedex-pad-h"></div>
        </div>

        <div class="PopUp__pokedex-smallScreen"></div>
      </div>

      <div class="PopUp__pokedex-right">
        <div class="PopUp__pokedex-info-container">
          <h2 className="text__typed">Welcome Krugerian!</h2>
        </div>

        <div class="PopUp__pokedex-buttons-shadow"></div>

        <div class="PopUp__pokedex-buttons">
          <div class="PopUp__pokedex-button PopUp__first"></div>
          <div class="PopUp__pokedex-button"></div>
          <div class="PopUp__pokedex-button"></div>
          <div class="PopUp__okedex-button"></div>
          <div class="PopUp__pokedex-button PopUp__fifth"></div>
          <div class="PopUp__pokedex-button PopUp__sixth"></div>
          <div class="PopUp__pokedex-button"></div>
          <div class="PopUp__pokedex-button"></div>
          <div class="PopUp__pokedex-button"></div>
          <div class="PopUp__pokedex-button PopUp__tenth"></div>
        </div>

        <div class="PopUp__pokedex-longButtons">
          <div class="PopUp__pokedex-longButton"></div>
          <div class="PopUp__pokedex-longButton"></div>
        </div>

        <div class="PopUp__pokedex-dualButtons-shadow"></div>

        <div class="PopUp__pokedex-dualButtons">
          <div class="PopUp__pokedex-dualButton PopUp__first"></div>
          <div class="PopUp__pokedex-dualButton PopUp__second"></div>
        </div>

        <div class="PopUp__pokedex-goldButton"></div>

        <div class="PopUp__pokedex-blackButtons">
          <div class="PopUp__pokedex-blackButton PopUp__pokedex-linkedinButton">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/jose-andres-gavilanes-2954691b5/"
            >
              <h2>Linkedin</h2>
            </a>
          </div>
          <div
            class="PopUp__pokedex-blackButton PopUp__pokedex-closeButton"
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
