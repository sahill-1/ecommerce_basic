import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook, FaGooglePlusG, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="site-footer mt-4">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <h6>About Company</h6>
              <p className="text-justify">
                Scanfcode.com <i>CODE WANTS TO BE SIMPLE </i> is an initiative
                to help the upcoming programmers with the code. Scanfcode
                focuses on providing the most efficient code or snippets as the
                code wants to be simple. We will help programmers build up
                concepts in different programming languages that include C, C++,
                Java, HTML, CSS, Bootstrap, JavaScript, PHP, Android, SQL, and
                Algorithm.
              </p>
            </div>

            <div className="col-xs-6 col-md-3">
              <h6>Top Categories</h6>
              <ul className="footer-links">
                <li>
                  <a href="http://scanfcode.com/category/c-language/">Oil</a>
                </li>
                <li>
                  <a href="http://scanfcode.com/category/front-end-development/">
                    Electronics
                  </a>
                </li>
                <li>
                  <a href="http://scanfcode.com/category/back-end-development/">
                    Footwear
                  </a>
                </li>
                <li>
                  <a href="http://scanfcode.com/category/java-programming-language/">
                    Apparel & Fashion
                  </a>
                </li>
                <li>
                  <a href="http://scanfcode.com/category/android/">Spices</a>
                </li>
                <li>
                  <a href="http://scanfcode.com/category/templates/">
                    Fruits & Vegetables
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-xs-6 col-md-3">
              <h6>Important Links</h6>
              <ul className="footer-links">
                <li>
                  <a href="http://scanfcode.com/about/">About Us</a>
                </li>
                <li>
                  <a href="http://scanfcode.com/contact/">Contact Us</a>
                </li>
                <li>
                  <a href="http://scanfcode.com/contribute-at-scanfcode/">
                    Contribute
                  </a>
                </li>
                <li>
                  <a href="http://scanfcode.com/privacy-policy/">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="http://scanfcode.com/sitemap/">Sitemap</a>
                </li>
              </ul>
            </div>
          </div>
          <hr />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-sm-6 col-xs-12">
              <p className="copyright-text">
                Copyright &copy; 2017 All Rights Reserved by{" "}
                <a href="/">Business World Trade.</a>
              </p>
            </div>

            <div className="col-md-4 col-sm-6 col-xs-12">
              <ul className="social-icons">
                <li>
                  <a className="facebook" href="/">
                    <i className="">
                      <FaFacebook />
                    </i>
                  </a>
                </li>
                <li>
                  <a className="twitter" href="/">
                    <i className="">
                      <FaXTwitter />
                    </i>
                  </a>
                </li>
                <li>
                  <a className="dribbble" href="/">
                    <i className="">
                      <FaGooglePlusG />
                    </i>
                  </a>
                </li>
                <li>
                  <a className="linkedin" href="/">
                    <i className="">
                      <FaInstagram />
                    </i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
