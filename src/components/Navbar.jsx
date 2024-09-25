import React, { useEffect, useState } from "react";
import { full_logo } from "../assets";

function Navbar() {
  const [searchFormActive, setSearchFormActive] = useState(false);
  const [navbarActive, setNavbarActive] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const scrollY = window.scrollY;
      const threshold = window.innerHeight / 2;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id");

        if (
          scrollY + threshold >= sectionTop &&
          scrollY + threshold < sectionTop + sectionHeight
        ) {
          setActiveSection(sectionId);
        }
      });

      if (scrollY > 0) {
        document.querySelector(".header").classList.add("active");
      } else {
        document.querySelector(".header").classList.remove("active");
      }
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleSearchForm = () => {
    setSearchFormActive(!searchFormActive);
    setNavbarActive(false);
  };

  const toggleNavbar = () => {
    setNavbarActive(!navbarActive);
    setSearchFormActive(false);
  };

  return (
    <>
      <header className="header">
        <a href="#" className="logo">
          <img src={full_logo} alt="Logo" />
        </a>
        <nav className={`navbar ${navbarActive ? "active" : ""}`}>
          <a href="#home" className={activeSection === "home" ? "active" : ""}>
            home
          </a>
          <a
            href="#about"
            className={activeSection === "about" ? "active" : ""}
          >
            about
          </a>
          <a
            href="#products"
            className={activeSection === "products" ? "active" : ""}
          >
            services
          </a>
          <a
            href="#contact"
            className={activeSection === "contact" ? "active" : ""}
          >
            contact
          </a>
        </nav>
        <div className="icons">
          <div
            id="menu-btn"
            className="fas fa-bars"
            onClick={toggleNavbar}
          ></div>
          <div
            id="search-btn"
            className="fas fa-search"
            onClick={toggleSearchForm}
          ></div>
          <a href="#" className="fas fa-user"></a>
        </div>
        <form
          action=""
          className={`search-form ${searchFormActive ? "active" : ""}`}
        >
          <input type="search" placeholder="search here..." id="input-box" />
          <label htmlFor="input-box" className="fas fa-search"></label>
        </form>
      </header>
    </>
  );
}

export default Navbar;
