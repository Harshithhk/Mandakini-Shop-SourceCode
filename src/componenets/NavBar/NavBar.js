import React from "react";
import "./NavBar.css";
import Banner from "./Banner/Banner";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
const NavBar = () => {
  return (
    <div className="Navbar">
      <ul>
        <li>
          <Link to="/about">
            <a href="#">Delivery </a>
          </Link>
        </li>

        <li>
          <a href="#">Contact </a>
        </li>

        <li>
          <a href="#">About Us </a>
        </li>
      </ul>
      <Fade right>
        <Banner />
      </Fade>
    </div>
  );
};

export default NavBar;
