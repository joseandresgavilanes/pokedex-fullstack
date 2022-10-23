import React from "react";
import "./styles/footerPoke.css";

const FooterPoke = () => {
  return (
    <footer className="red-rectangle">
      <div className="black-rectangle"></div>
      <div className="circle-ext">
        <div className="circle-int">
          <img
            className="kImg"
            src="https://krugercorp.com/wp-content/uploads/2022/02/KRUGER-icon-blanco-03.png"
            alt="kruger corp logo"
          />
        </div>
      </div>
      <img
        className="kruger"
        src="https://krugercorp.com/wp-content/uploads/2022/02/logo_kruger_.png"
        alt=""
      />
    </footer>
  );
};

export default FooterPoke;
