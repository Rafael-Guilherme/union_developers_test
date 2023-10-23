/// <reference types="vite-plugin-svgr/client" />
import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

import logo from "../../../assets/logo.png";
import Dashboard from "../../../assets/dashboard.svg?react";
import Arrow from "../../../assets/chevron-down.svg?react";
import Bar from "../../../assets/bar.svg?react";
import Arrow_right from "../../../assets/arrow-right.svg?react";
import Arrow_left from "../../../assets/arrow-left.svg?react";

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
          <nav className="container">
            <img className="logo-image" src={logo} />
            <ul>
              <li
                className={`list ${
                  location.pathname === "/dashboard" ? "active" : ""
                }`}
              >
                <Dashboard className="icon" />
                <NavLink to="/dashboard" className="list-item">
                  Dashboard
                </NavLink>
                <Arrow className="icon" />
              </li>
              <li
                className={`list ${
                  location.pathname === "/products" ? "active" : ""
                }`}
              >
                <Bar className="icon" />
                <NavLink to="/products" className="list-item">
                  Produtos
                </NavLink>
                <Arrow className="icon" />
              </li>
            </ul>
          </nav>
        </motion.div>
      )}
      <div className="closed-menu">
        {toggleMenu ? (
          <Arrow_right onClick={() => toggleMenuHandler()} className="arrow" />
        ) : (
          <Arrow_left onClick={() => toggleMenuHandler()} className="arrow" />
        )}
      </div>
    </div>
  );
};

export default MenuDesktop;
