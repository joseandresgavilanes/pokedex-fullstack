import React from "react";
import "../components/styles/Loader.scss";

const Loader = () => {
  return (
    <div className="box__container">
      <div class="box">
        <div class="face bottom"></div>
        <div class="face back"></div>
        <div class="face right"></div>
        <div class="face left">
          <div class="icons">
            <div class="umbrella"></div>
            <div class="orientation">
              <div class="base"></div>
            </div>
            <div class="glass"></div>
          </div>
        </div>
        <div class="face front">
          <div class="recycled">
            <div class="arrow"></div>
            <div class="arrow"></div>
            <div class="arrow"></div>
          </div>
          <div class="label"></div>
          <div class="ball"></div>
        </div>
        <div class="face top">
          <div class="cover-back"></div>
          <div class="cover-right"></div>
          <div class="cover-left"></div>
          <div class="cover-front"></div>
        </div>
        <div class="content">
          <div class="pikachu">
            <div class="ear left"></div>
            <div class="ear"></div>
            <div class="head">
              <div class="eye"></div>
              <div class="eye"></div>
              <div class="nouse"></div>
              <div class="mouth"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
