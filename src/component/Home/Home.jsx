import React from "react";
import "./Home.css";
import img1 from "../../images/prologo.jpeg";
import img2 from "../../images/slack.png";
import img3 from "../../images/github.png";

const Home = () => {
  const data = [
    {
      text: "Twitter Link",
      link: "https://twitter.com/OkoyeDennis07",
    },
    {
      text: "Zuri Team",
      link: "https://training.zuri.team",
    },
    {
      text: "Zuri Books",
      link: "https://books.zuri.team/",
    },
    {
      text: "Python Books",
      link: "https://books.zuri.team/python-for-beginners?ref_id=<dennis okoye>",
    },
    {
      text: "Background Check for Coders",
      link: "https://www.figma.com/exit?url=https%3A%2F%2Fbackground.zuri.team",
    },
    {
      text: "Design Books",
      link: "https://books.zuri.team/design-rules",
    },
  ];
  return (
    <div className="home">
      <div className="home__wrapper">
        <div className="profile_container">
          <img src={img1} id="profile__img" alt="profile_logo" />
          <h6>Annette Black</h6>
        </div>
        <div className="link__wrapper">
          {data.map(({ text, link }, index) => (
            <div key={index}>
              <a target="_blank" href={link}>
                {text}
              </a>
            </div>
          ))}
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
