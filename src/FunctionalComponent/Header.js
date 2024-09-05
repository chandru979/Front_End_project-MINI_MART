import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

const Header = () => {
  return (
    <>
      <nav className="bgg-color navbar-expand-lg ">
        <ul
          className="list-link navbar-nav mr-auto mt-2 mt-lg-0 flex-li"
          style={{ listStyle: "none" }}
        >
          <li className="title-mini-mart">
            <h1
              className="navbar-brand link-mini-mart navbar-title"
              style={{ color: "white", fontSize: "25px" }}
            >
              MINI MART
            </h1>
          </li>
          <li className="search-bar">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>

            <input type="search" />
            <button>search</button>
          </li>

          <li className="nav-item li-home-link">
            <Link to="/" className="link-home">
              HOME
            </Link>
          </li>
          
          <li className="nav-item li-login-link">
            <Link to="/login" className="link-login">
              LOGIN
            </Link>
          </li>
          <li className="nav-item li-sign-link">
            <Link to="/SignUp" className="link-sign">
              SIGN UP
            </Link>
          </li>
          <li className="nav-item li-cart-link">
            <Link to="/login" className="link-login">
              ADD CART
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
