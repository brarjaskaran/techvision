import React, { useEffect, useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Container,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import logo from "../logowhite.svg";
import logob from "../logoblack.svg";
import "./Tdsheader.css";

import avdhut from '../images/avdhut.png'

const Tdsheader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("home");

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
  }, []);

  const handleScroll = () => {
    const scrollY = window.scrollY; //Don't get confused by what's scrolling - It's not the window
    const navbar = document.querySelector("nav");

    const sections = document.querySelectorAll(".section");
    var scrollDistance = window.scrollY;
    sections.forEach((section, key) => {
      if (
        section.getBoundingClientRect().top <= scrollDistance &&
        section.getBoundingClientRect().top > -150 &&
        section.getBoundingClientRect().top < 50
      ) {
        setActiveMenu(section.getAttribute("id"));
      }
    });

    if (scrollY > 20) {
      if (navbar.classList.contains("is-sticky") === false) {
        navbar.classList.add("is-sticky");
      }
    } else {
      if (navbar.classList.contains("is-sticky") === true) {
        navbar.classList.remove("is-sticky");
      }
    }
  };

  const handleClickOutside = (event) => {
    setIsOpen(false);
  };
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const scrollToTop = (element) => {
    setActiveMenu(element);

    var elementPosition = document.getElementById(element).offsetTop;
    window.scrollTo({
      top: elementPosition,
      behavior: "smooth",
    });
  };

  return (
    <header>
      <Navbar expand="md" fixed={"top"}>
        <Container>
          <NavbarBrand
            onClick={() => scrollToTop("home")}
            className={activeMenu === "home" ? "active" : ""}
          >
            <h3 className="logoblack">AVDHUT</h3>
            <h3 style={{ color: "#fff" }} className="logowhite">
              <img src={avdhut}/>
            </h3>
            {/* <img src={logo} className="logowhite" alt="logo" />
              <img src={logob} className="logoblack" alt="logo" /> */}
          </NavbarBrand>
          <NavbarToggler onClick={toggle}>
            <span></span>
          </NavbarToggler>
          <Collapse isOpen={isOpen} navbar className="menu-ul">
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink
                  onClick={() => scrollToTop("home")}
                  className={activeMenu === "home" ? "active" : ""}
                >
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  onClick={() => scrollToTop("about")}
                  className={activeMenu === "about" ? "active" : ""}
                >
                  About
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  onClick={() => scrollToTop("services")}
                  className={activeMenu === "services" ? "active" : ""}
                >
                  Services
                </NavLink>
              </NavItem>
              {/* <NavItem>
                <NavLink
                  onClick={() => scrollToTop("team")}
                  className={activeMenu === "team" ? "active" : ""}
                >
                  Team
                </NavLink>
              </NavItem> */}
              <NavItem>
                <NavLink
                  onClick={() => scrollToTop("portfolio")}
                  className={activeMenu === "portfolio" ? "active" : ""}
                >
                  Portfolio
                </NavLink>
              </NavItem>

              {/* <NavItem>
                <NavLink
                  onClick={() => scrollToTop("price")}
                  className={activeMenu === "price" ? "active" : ""}
                >
                  Price
                </NavLink>
              </NavItem> */}

              {/* <NavItem>
                <NavLink
                  onClick={() => scrollToTop("blog")}
                  className={activeMenu === "blog" ? "active" : ""}
                >
                  Blog
                </NavLink>
              </NavItem> */}
              <NavItem>
                <NavLink
                  onClick={() => scrollToTop("contact")}
                  className={activeMenu === "contact" ? "active" : ""}
                >
                  Contact
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Tdsheader;
