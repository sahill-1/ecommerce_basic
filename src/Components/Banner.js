import React from "react";
import Carousel from "react-bootstrap/Carousel";
import banner from "../images/banner.jpg";
const Banner = () => {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img src={banner} alt="error" className="banner-width" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={banner} alt="error" className="banner-width" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={banner} alt="error" className="banner-width" />
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
