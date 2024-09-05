import React from "react";
import "../styles/menubar.css";
import { Link } from "react-router-dom";

function Menubar() {
  return (
    <>
      <nav className="container-menubar">
        <ul className="ul-Link-display">
          <Link to="/groceryProduct">
            <li>Vegetables</li>
          </Link>
          <Link to="/fruits">
            <li>Fruits</li>
          </Link>
          <Link to="">
            <li>Home Essentials</li>{" "}
          </Link>
          <Link to="">
            <li>Today's Deals</li>
          </Link>
          <Link to=" ">
            <li>Snacks</li>
          </Link>
          <Link to="">
            <li>Skin Care</li>
          </Link>
          <Link to="">
            <li>Masalas</li>
          </Link>
          <Link to="">
            <li>Cool Drinks</li>
          </Link>
        </ul>
      </nav>
    </>
  );
}

export default Menubar;
