import React from "react";

import FooterImg from "../assets/footerLogo.png";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-text">
          All prices are subject to a 20% service charge. For guests with food
          allergies or specific dietary requirements, please ask to speak to a
          Manager. *Consuming raw or undercooked meat, poultry, seafood,
          shellfish and eggs may increase your risk of food borne illness,
          especially those with certain medical conditions.
        </div>
        <img className="footer-img" src={FooterImg} alt="forks and message" />
      </footer>
    </>
  );
};

export default Footer;
