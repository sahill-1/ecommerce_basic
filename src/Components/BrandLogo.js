import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BrandLogo = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  return (
    <>
      {/* <div className="mt-5 text-center new-arrival">
        <h2>Meet Our Clients</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          faucibus maximus vehicula. Sed feugiat, tellus vel tristique posuere,
          diam
        </p>
      </div> */}
      <div className="text-center mx-auto my-5" style={{ maxWidth: "600px" }}>
        <h1 className="display-5 mb-0">Dealing Brands</h1>
        <hr className="w-25 mx-auto bg-primary" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          faucibus maximus vehicula. Sed feugiat, tellus vel tristique posuere,
          diam
        </p>
      </div>
      <Slider {...settings} className="my-4">
        <img
          className="slider-image"
          src="https://seeklogo.com/images/C/cmp-client-money-protect-logo-77DDEC9898-seeklogo.com.png"
          alt="error"
        />
        <img
          className="slider-image"
          src="https://seeklogo.com/images/C/cmp-client-money-protect-logo-77DDEC9898-seeklogo.com.png"
          alt="error"
        />
        <img
          className="slider-image"
          src="https://seeklogo.com/images/C/cmp-client-money-protect-logo-77DDEC9898-seeklogo.com.png"
          alt="error"
        />
        <img
          className="slider-image"
          src="https://seeklogo.com/images/C/cmp-client-money-protect-logo-77DDEC9898-seeklogo.com.png"
          alt="error"
        />
        <img
          className="slider-image"
          src="https://seeklogo.com/images/C/cmp-client-money-protect-logo-77DDEC9898-seeklogo.com.png"
          alt="error"
        />
        <img
          className="slider-image"
          src="https://seeklogo.com/images/C/cmp-client-money-protect-logo-77DDEC9898-seeklogo.com.png"
          alt="error"
        />
      </Slider>
    </>
  );
};

export default BrandLogo;
