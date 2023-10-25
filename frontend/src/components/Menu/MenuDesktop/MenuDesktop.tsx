import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

import logo from "../../../assets/logo.png";
import Dashboard from "../../../assets/dashboard.png";
import Arrow from "../../../assets/arrow-down.png";
import Bar from "../../../assets/bar.png";
import Arrow_right from "../../../assets/arrow-right.png";
import Arrow_left from "../../../assets/arrow-left.png";

import "./MenuDesktop.scss";

const MenuDesktop = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const location = useLocation();

  const toggleMenuHandler = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <div className="motion-container">
      {!toggleMenu && (
        <motion.div
          whileInView={{ x: [-285, 0] }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <nav className="container" data-testid="menu-desktop">
            <img className="logo-image" src={logo} />
            <ul>
              <li
                className={`list ${
                  location.pathname === "/dashboard" ? "active" : ""
                }`}
              >
                <img className="icon" src={Dashboard} />
                <NavLink to="/dashboard" className="list-item">
                  Dashboard
                </NavLink>
                <img className="arrow-down-style" src={Arrow} />
              </li>
              <li
                className={`list ${
                  location.pathname === "/products" ? "active" : ""
                }`}
              >
                <img className="icon" src={Bar} />
                <NavLink to="/products" className="list-item">
                  Produtos 
                </NavLink>
                <img className="arrow-down-style" src={Arrow} />
              </li>
            </ul>
          </nav>
        </motion.div>
      )}
      <div className="closed-menu">
        {toggleMenu ? (
          <div data-testid="toggle-button" onClick={() => toggleMenuHandler()}>
            <img className="arrow" src={Arrow_right} />
          </div>
        ) : (
          <div data-testid="toggle-button" onClick={() => toggleMenuHandler()}>
            <img className="arrow" src={Arrow_left} />
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuDesktop;
