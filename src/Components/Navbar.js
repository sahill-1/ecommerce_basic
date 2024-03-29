import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const NavbarHome = () => {
  const [showProducts, setShowProducts] = useState(false);

  const handleMouseEnter = () => {
    setShowProducts(true);
  };
  const handleMouseLeave = () => {
    setShowProducts(false);
  };

  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        className="bg-body-tertiary"
        onMouseLeave={handleMouseLeave}
      >
        <Container>
          <Navbar.Brand
            className="text-warning font-weight-bold"
            style={{ fontSize: "xx-large", fontWeight: "bolder" }}
            href="#home"
          >
            E-commerce
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            className="justify-content-end"
            id="responsive-navbar-nav"
          >
            <Nav>
              <Nav.Link className="px-3" href="/">
                Home
              </Nav.Link>
              <Nav.Link className="px-3" href="/aboutus">
                About Us
              </Nav.Link>
              <NavDropdown
                className="px-3"
                id="nav-dropdown-dark-example"
                title="Products"
                show={showProducts}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                menuVariant="dark"
              >
                <NavDropdown.Item href="#fff">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link className="px-3" href="/contactus">
                Contact Us
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
   
   
    );
};

export default NavbarHome;