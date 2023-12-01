import React from "react";
import NavbarHome from "../Components/Navbar";
import Banner from "../Components/Banner";
import NumberOne from "../Components/NumberOne";
import Newarrival from "../Components/Newarrival";
import BrandLogo from "../Components/BrandLogo";
import FeaturedProducts from "../Components/FeaturedProducts";
import WhyChooseUs from "../Components/WhyChooseUs";
import Testimonial from "../Components/Testimonial";
import Footer from "../Components/Footer";
const Homepage = () => {
  return (
    <div>
      <NavbarHome />
      <Banner />
      <NumberOne/>
      <Newarrival />
      <BrandLogo />
      <FeaturedProducts />
      <WhyChooseUs />
      <Testimonial />
      <Footer/>
    </div>
  );
};

export default Homepage;
