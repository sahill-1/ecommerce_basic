import React from "react";
import {
  FaCubes,
  FaPercent,
  FaAward,
  FaSmileBeam,
  FaUserTie,
  FaHeadset,
} from "react-icons/fa";

const WhyChooseUs = () => {
  return (
    <>
      <div className="container-fluid py-6 px-5">
        <div className="text-center mx-auto my-5" style={{ maxWidth: "600px" }}>
          <h1 className="display-5 mb-0">Why Choose Us!!!</h1>
          <hr className="w-25 mx-auto bg-primary" />
        </div>
        <div className="row g-5">
          <div className="col-lg-4">
            <div className="row g-5">
              <div className="col-12">
                <div
                  className="bg-warning rounded-circle d-flex align-items-center justify-content-center mb-3"
                  style={{ width: "60px", height: "60px" }}
                >
                  <i className="fs-4 text-white">
                    <FaCubes />
                  </i>
                </div>
                <h3>Best In Industry</h3>
                <p className="mb-0">
                  Magna sea eos sit dolor, ipsum amet ipsum lorem diam dolor eos
                  diam et diam dolor ea
                </p>
              </div>
              <div className="col-12">
                <div
                  className="bg-warning rounded-circle d-flex align-items-center justify-content-center mb-3"
                  style={{ width: "60px", height: "60px" }}
                >
                  <i className="fs-4 text-white">
                    <FaPercent />
                  </i>
                </div>
                <h3>99% Success Rate</h3>
                <p className="mb-0">
                  Magna sea eos sit dolor, ipsum amet ipsum lorem diam dolor eos
                  diam et diam dolor ea
                </p>
              </div>
              <div className="col-12">
                <div
                  className="bg-warning rounded-circle d-flex align-items-center justify-content-center mb-3"
                  style={{ width: "60px", height: "60px" }}
                >
                  <i className="fs-4 text-white">
                    <FaAward />
                  </i>
                </div>
                <h3>Award Winning</h3>
                <p className="mb-0">
                  Magna sea eos sit dolor, ipsum amet ipsum lorem diam dolor eos
                  diam et diam dolor ea
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="d-block bg-primary h-100 text-center">
              <img
                className="img-fluid"
                src="https://buffer.com/library/content/images/2023/10/free-images.jpg"
                alt="error"
              />
              <div className="p-4">
                <p className="text-white mb-4">
                  Clita nonumy Clita nonumy sanctus nonumy et clita tempor, et
                  sea amet ut et sadipscing rebum amet takimata amet, sed
                  accusam eos eos dolores dolore et. Et ea ea dolor rebum
                  invidunt clita eos. Sea accusam stet stet ipsum, sit ip
                </p>
                <a
                  href="/"
                  className="btn btn-light py-md-3 px-md-5 rounded-pill mb-2"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="row g-5">
              <div className="col-12">
                <div
                  className="bg-warning rounded-circle d-flex align-items-center justify-content-center mb-3"
                  style={{ width: "60px", height: "60px" }}
                >
                  <i className="fs-4 text-white">
                    <FaSmileBeam />
                  </i>
                </div>
                <h3>100% Happy Client</h3>
                <p className="mb-0">
                  Magna sea eos sit dolor, ipsum amet ipsum lorem diam dolor eos
                  diam et diam dolor ea
                </p>
              </div>
              <div className="col-12">
                <div
                  className="bg-warning rounded-circle d-flex align-items-center justify-content-center mb-3"
                  style={{ width: "60px", height: "60px" }}
                >
                  <i className="fs-4 text-white">
                    <FaUserTie />
                  </i>
                </div>
                <h3>Professional Advisors</h3>
                <p className="mb-0">
                  Magna sea eos sit dolor, ipsum amet ipsum lorem diam dolor eos
                  diam et diam dolor ea
                </p>
              </div>
              <div className="col-12">
                <div
                  className="bg-warning rounded-circle d-flex align-items-center justify-content-center mb-3"
                  style={{ width: "60px", height: "60px" }}
                >
                  <i className="fs-4 text-white">
                    <FaHeadset />
                  </i>
                </div>
                <h3>24/7 Customer Support</h3>
                <p className="mb-0">
                  Magna sea eos sit dolor, ipsum amet ipsum lorem diam dolor eos
                  diam et diam dolor ea
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChooseUs;
