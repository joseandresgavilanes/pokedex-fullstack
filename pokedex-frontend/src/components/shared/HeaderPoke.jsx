import React from "react";
import "./styles/headerPoke.css";

const HeaderPoke = () => {
  return (
    <header className="red-rectangle-header">
      <img className="header-img" src="/images/Home/pokedex.png" alt="" />
      <div className="black-rectangle-header"></div>
      <div className="circle-ext-header">
        <div className="circle-int-header">
          <img
            className="kImg"
            src="https://krugercorp.com/wp-content/uploads/2022/02/KRUGER-icon-blanco-03.png"
            alt="kruger corp logo"
          />
        </div>
      </div>
    </header>
  );
};

export default HeaderPoke;
