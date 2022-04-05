import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <header>
        <navbar className="flex-row bg-d-blue text-white">
          <div className="navbar-list navbar-primary flex-row">
            <a href="#" className="text-white">
              <h1>Cell Kart 🛒</h1>
            </a>
          </div>
          <div className="navbar-list navbar-social">
            <button className="hamburger-menu-btn">
              <i className="fas fa-bars"></i>
            </button>
            <ul className="flex-row navbar-ul">
              <li>
                <a href="#" className="navbar-link text-white">
                  Documentation
                </a>
              </li>
              <li>
                <span class="material-icons-filled">shopping_cart</span>
              </li>
              <li>
                <a href="" className="fa-icon text-white">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="" className="fa-icon text-white">
                  <i className="fab fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="" className="fa-icon text-white">
                  <i className="far fa-moon"></i>
                </a>
              </li>
            </ul>
          </div>
        </navbar>
      </header>
    </div>
  );
};

export default Navbar;
