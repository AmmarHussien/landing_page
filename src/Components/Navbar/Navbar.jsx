// src/components/Navbar.js

import { useEffect } from "react";
import "./Navbar.css";

function Navbar() {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(".navbar");
      if (window.scrollY > 50) {
        // Adjust scroll position threshold as needed
        navbar.classList.add("transparent");
      } else {
        navbar.classList.remove("transparent");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <img src="src/assets/Logo.svg" alt="Brand Logo" />
        </div>
        <ul className="navbar-links">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
