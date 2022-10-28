import React from "react";
import "./Footer.css";
import img1 from "../../images/ZuriInternship_Logo.png";
import img2 from "../../images/I4G.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__wrapper">
        <img src={img1} alt="logo" />
        <p>HNG Internship 9 Frontend Task</p>
        <img src={img2} alt="logo" />
      </div>
    </div>
  );
};

export default Footer;
