import React from "react";
import "./Nav.css";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <nav>
        <ul className="navbar">
          <span id="logo">
            <img src="./Logo.jpg" alt="Logo" className="logo" />
          </span>

          <li>
            <NavLink to="/#home" id="home">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/reservations">Reservations</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};
export default Nav;
