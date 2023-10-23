/// <reference types="vite-plugin-svgr/client" />
import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

import logo from "../../../assets/logo.png";
import Dashboard from "../../../assets/dashboard.svg?react";
import Arrow from "../../../assets/chevron-down.svg?react";
import Bar from "../../../assets/bar.svg?react";
import Categories from "../../../assets/menu.svg?react";

import "./MenuMobile.scss";

const MenuMobile = () => {
  const [toggleMobile, setToggleMobile] = useState(true);
  const location = useLocation();

  const toggleMobileHandler = () => {
    setToggleMobile(!toggleMobile);
  };

  return (
    <div className="mobile-only">
      {!toggleMobile ? (
        <motion.div
          whileInView={{ x: [-285, 0] }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <nav className="container">
            <img className="logo-image" src={logo} />
            <ul>
              <li className={`list ${location.pathname === '/dashboard' ? 'active-mobile' : ''}`}>
                <Dashboard className="icon" />
                <NavLink
                  to="/dashboard"
                  className="list-item"
                  onClick={() => toggleMobileHandler()}
                >
                  Dashboard
                </NavLink>
                <Arrow className="icon" />
              </li>
              <li className={`list ${location.pathname === '/products' ? 'active-mobile' : ''}`}>
                <Bar className="icon" />
                <NavLink
                  to="/products"
                  className="list-item"
                  onClick={() => toggleMobileHandler()}
                >
                  Produtos
                </NavLink>
                <Arrow className="icon" />
              </li>
              <li className="list">
                <Categories className="icon" />
                <a onClick={() => toggleMobileHandler()} className="list-item">
                  Categorias
                </a>
                <Arrow className="icon" />
              </li>
            </ul>
          </nav>
        </motion.div>
      ) : (
        <div className="closed-menu">
          <Categories onClick={() => toggleMobileHandler()} className="menu" />
        </div>
      )}
    </div>
  );
};

export default MenuMobile;
