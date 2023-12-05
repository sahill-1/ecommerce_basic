import React from "react";
import NavbarHome from "../Components/Navbar";
import Footer from "../Components/Footer";

const ContactUs = () => {
  return (
    <>
      <NavbarHome />

      {/* BANNER */}
      <div
        className="container-fluid bg-primary py-5 bg-her"
        style={{ marginBottom: "20px" }}
      >
        <div className="container py-5">
          <div className="row justify-content-start">
            <div className="col-lg-8 text-center text-lg-start">
              <h1 className="display-1 text-dark">Contact Us</h1>
              <div className="pt-2">
                <a
                  href="/"
                  className="btn btn-secondary rounded-pill py-2 px-4 mx-2"
                  style={{ backgroundColor: "#8CC641" }}
                >
                  Home
                </a>
                <a
                  href="/contactus"
                  className="btn btn-secondary rounded-pill py-2 px-4 mx-2"
                  style={{ backgroundColor: "#8CC641" }}
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CONTACT FORM */}
      <div className="container">
        <h1 className="brand">
          <span>Business World Trade</span>
        </h1>
        <div className="wrapper">
          {/* COMPANY INFORMATION */}
          <div className="company-info">
            <h3>Business World Trade</h3>
            <ul>
              <li>
                <i className="fa fa-road"></i> 44 Main Street
              </li>
              <li>
                <i className="fa fa-phone"></i> (555) 555-5555
              </li>
              <li>
                <i className="fa fa-envelope"></i> test@phoenix.com
              </li>
            </ul>
          </div>
          {/* End .company-info */}

          {/* CONTACT FORM */}
          <div className="contact">
            <h3>E-mail Us</h3>
            <form id="contact-form">
              <p>
                <label>Name</label>
                <input type="text" name="name" id="name" />
              </p>
              <p>
                <label>Company</label>
                <input type="text" name="company" id="company" />
              </p>
              <p>
                <label>E-mail Address</label>
                <input type="email" name="email" id="email" />
              </p>
              <p>
                <label>Phone Number</label>
                <input type="text" name="phone" id="phone" />
              </p>
              <p className="full">
                <label>Message</label>
                <textarea name="message" rows="5" id="message"></textarea>
              </p>
              <p className="full">
                <button type="submit">Submit</button>
              </p>
            </form>
            {/* End #contact-form */}
          </div>
          {/* End .contact */}
        </div>
        {/* End .wrapper */}
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
