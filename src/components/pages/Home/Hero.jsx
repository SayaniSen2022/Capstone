import React from "react";
import "./Hero.css";
import { Card, CardBody, Image, Text } from "@chakra-ui/react";

const Hero = () => {
  return (
    <>
      <div className="hero">
        <p className="bio">
          We are a family owned Mediterranean restaurant, focussed on
          traditional recipes served with a modern twist.
          <Card borderRadius="10" bg="#04030f">
            <CardBody display="flex" flexDirection="column">
              <Text fontSize="5xl" className="offer-head">
                WEEKEND OFFER
              </Text>
              <div className="dineout-block">
                <Image
                  className="dineout-image"
                  objectFit="cover"
                  src="./dineout.jpg"
                  alt="Dineout image"
                />
                <Text fontSize="5xl" pl="4" className="announcement">
                  FLAT 40% OFF on dining out bills!
                </Text>
              </div>
            </CardBody>
          </Card>
        </p>

        <img src="./greekfood.jpg" alt="promo" className="hero-image" />
      </div>
    </>
  );
};
export default Hero;
