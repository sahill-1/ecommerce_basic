import React from 'react'
import NavbarHome from '../Components/NavbarHome'
import Banners from '../Components/Banners'
import NewArrival from '../Components/NewArrival'
const Homepage = () => {
  return (
    <div>
      <NavbarHome />
      <Banners/>
      <NewArrival />
    </div>
  )
}

export default Homepage
