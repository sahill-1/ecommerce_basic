import React from 'react'
import NavbarHome from '../Components/NavbarHome'
import Banners from '../Components/Banners'
import NewArrival from '../Components/NewArrival'
import PopularProducts from '../Components/PopularProducts'
import Footer from '../Components/Footer'
const Homepage = () => {
  return (
    <div>
      <NavbarHome />
      <Banners />
      <NewArrival />
      <PopularProducts />
      <Footer/>
    </div>
  )
}

export default Homepage
