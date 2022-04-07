import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <header>
        <navbar className="flex-row bg-d-blue text-white">
          <div className="navbar-list navbar-primary flex-row">
            <button className="text-white">
              <h1>Cell Kart 🛒</h1>
            </button>
          </div>
          <div className="navbar-list navbar-social">
            <button className="hamburger-menu-btn">
              <i className="fas fa-bars"></i>
            </button>
            <ul className="flex-row navbar-ul">
              <li>
                <button className="navbar-link text-white">
                  Documentation
                </button>
              </li>
              <li>
                <span class="material-icons-filled">shopping_cart</span>
              </li>
              <li>
                <button href="" className="fa-icon text-white">
                  <i className="fab fa-twitter"></i>
                </button>
              </li>
              <li>
                <button href="" className="fa-icon text-white">
                  <i className="fab fa-linkedin"></i>
                </button>
              </li>
              <li>
                <button href="" className="fa-icon text-white">
                  <i className="far fa-moon"></i>
                </button>
              </li>
            </ul>
          </div>
        </navbar>
      </header>
    </div>
  );
};

export default Navbar;
