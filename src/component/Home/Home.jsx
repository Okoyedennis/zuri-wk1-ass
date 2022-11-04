import React from "react";
import "./Home.css";
import img1 from "../../images/prologo.jpeg";
import img2 from "../../images/slack.png";
import img3 from "../../images/github.png";
import { Link } from "react-router-dom";

const Home = () => {
  const data = [
    {
      text: "Twitter Link",
      link: "https://twitter.com/OkoyeDennis07",
      id: "twitter",
    },
    {
      text: "Zuri Team",
      link: "https://training.zuri.team",
      id: "btn__zuri",
    },
    {
      text: "Zuri Books",
      link: "https://books.zuri.team/",
      id: "books",
    },
    {
      text: "Python Books",
      link: "https://books.zuri.team/python-for-beginners?ref_id=<dennis okoye>",
      id: "book__python",
    },
    {
      text: "Background Check for Coders",
      link: "https://background.zuri.team",
      id: "pitch",
    },
    {
      text: "Design Books",
      link: "https://books.zuri.team/design-rules",
      id: "book__design",
    },
  ];
  return (
    <div className="home">
      <h2 id="slack">Dennis Okoye</h2>
      <div className="home__wrapper">
        <div className="profile_container">
          <img src={img1} id="profile__img" alt="profile_logo" />
          <h6 id="twitter">OkoyeDennis07</h6>
        </div>
        <div className="link__wrapper">
          {data.map(({ text, link, id }, index) => (
            <a target="_blank" id={id} rel="noreferrer" href={link}>
              <div key={index}>{text}</div>
            </a>
          ))}
          <Link to="/contact" id="contact">
            <div>Contact Me</div>
          </Link>
        </div>
        <div className="icon__wrapper">
          <img src={img2} alt="icon" />
          <img src={img3} alt="icon" />
        </div>
      </div>
    </div>
  );
};

export default Home;
