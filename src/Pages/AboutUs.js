import React from 'react'
import Navbar from "../Components/Navbar";
import { FaShoppingCart, FaShoppingBasket, FaStopwatch, FaMotorcycle } from "react-icons/fa";
import Footer from '../Components/Footer';

const AboutUs = () => {
  return (
    <>
    {/* NAVBAR */}
    <Navbar />
    {/* BANNER */}
    <div className="container-fluid bg-primary py-5 bg-hero" style={{marginBottom:"90px"}}>
        <div className="container py-5">
            <div className="row justify-content-start">
                <div className="col-lg-8 text-center text-lg-start">
                    <h1 className="display-1 text-dark">About Us</h1>
                    <div className="pt-2">
                        <a href="/" className="btn btn-secondary rounded-pill py-2 px-4 mx-2" style={{backgroundColor: "#8CC641"}}>Home</a>
                        <a href="/aboutus" className="btn btn-secondary rounded-pill py-2 px-4 mx-2" style={{backgroundColor: "#8CC641"}}>About Us</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* ABOUT US */}
    <div className="container-fluid py-5">
        <div className="container">
            <div className="row gx-5">
                <div className="col-lg-5 mb-5 mb-lg-0" style={{minHeight:"100px"}}>
                    <div className="position-relative h-100">
                        <img className="position-absolute w-100 h-100 rounded" src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8fDA%3D" alt='error' style={{objectFit:"cover"}} />
                    </div>
                </div>
                <div className="col-lg-7">
                    <div className="mb-4">
                        <h5 className="d-inline-block text-primary text-uppercase border-bottom border-5">About Us</h5>
                        <h1 className="display-4">Yourself For Medical Family and Care Your Best</h1>
                    </div>
                    <p>Tempor erat elitr at rebum at at clita aliquyam consetetur. Diam dolor diam ipsum et, tempor voluptua sit consetetur sit. Aliquyam diam amet diam et eos sadipscing labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor consetetur takimata eirmod, dolores takimata consetetur invidunt magna dolores aliquyam dolores dolore. Amet erat amet et magna</p>
                    <div className="row g-3 pt-3">
                        <div className="col-sm-3 col-6">
                            <div className="bg-light text-center rounded-circle py-4">
                                <i className="fa fa-3x fa-user-md text-primary mb-3"><FaShoppingCart/></i>
                                <h6 className="mb-0">Qualified<small className="d-block text-primary">Doctors</small></h6>
                            </div>
                        </div>
                        <div className="col-sm-3 col-6">
                            <div className="bg-light text-center rounded-circle py-4">
                                <i className="fa fa-3x fa-procedures text-primary mb-3"><FaShoppingBasket/></i>
                                <h6 className="mb-0">Emergency<small className="d-block text-primary">Services</small></h6>
                            </div>
                        </div>
                        <div className="col-sm-3 col-6">
                            <div className="bg-light text-center rounded-circle py-4">
                                <i className="fa fa-3x fa-microscope text-primary mb-3"><FaStopwatch/></i>
                                <h6 className="mb-0">Accurate<small className="d-block text-primary">Testing</small></h6>
                            </div>
                        </div>
                        <div className="col-sm-3 col-6">
                            <div className="bg-light text-center rounded-circle py-4">
                                <i className="fa fa-3x fa-ambulance text-primary mb-3"><FaMotorcycle/></i>
                                <h6 className="mb-0">Free<small className="d-block text-primary">Ambulance</small></h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
     {/* About Start */}
    <div id="about" className="about">
         <div className="container">
            <div className="row">
               <div className="col-md-10 offset-md-1">
                  <div className="titlepage">
                     <p>It is a long established fact that a reader will be distracted by the readable content ofa page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it </p>
                  </div>
               </div>
               <div className="col-md-10 offset-md-1">
                  <div className="about_img">
                     <figure><img src="https://i.pinimg.com/originals/cd/bc/f0/cdbcf077b62246123f74fcc919587b0b.jpg" alt="#"/></figure>
                  </div>
               </div>
            </div>
         </div>
      </div>
    
    {/* FOOTER */}
    <Footer/>
    </>
  )
}

export default AboutUs
