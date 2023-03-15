import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <>
      <div className="hero">
        <p className="bio">
          We are a family owned Mediterranean restaurant, focussed on
          traditional recipes served with a modern twist.
          <h1 className="announcement">
            GET UPTO 40% OFF ON ORDERS ABOVE @499
          </h1>
        </p>

        <img src="./promo.jpg" alt="promo" className="hero-image" />
      </div>
    </>
  );
};
export default Hero;
