import React, { useEffect, useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "../Navbar/navbar.css";
import logo from "../../images/logo.png";
const NavbarComponent = () => {
  const [navbarBg, setNavbarBg] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrollingDown = window.scrollY > 0;
      setNavbarBg(isScrollingDown);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header>
      <Navbar
        expand="lg"
        className={navbarBg ? "bg-blue fixed-top" : "bg-transparent"}
      >
        <Container className="just">
          <img src={logo} alt="" />
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end "
          >
            <Nav className="ml-auto main-nav">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
              <NavLink className="nav-link" to="/ourShop">
                Our Shop
              </NavLink>
              <NavLink className="nav-link" to="/product">
                Product Details
              </NavLink>
              <NavLink className="nav-link" to="/contact">
                Contact Us
              </NavLink>
              <NavLink className="nav-link signinBtn" to="/">
                SIGN IN
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default NavbarComponent;
