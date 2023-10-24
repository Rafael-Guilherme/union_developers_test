/// <reference types="vite-plugin-svgr/client" />
import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

import logo from "../../../assets/logo.png";
import Dashboard from "../../../assets/dashboard.png";
import Arrow from "../../../assets/arrow-down.png";
import Bar from "../../../assets/bar.png";
import Categories from "../../../assets/menu.png";

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
                <img className="icon" src={Dashboard} />
                <NavLink
                  to="/dashboard"
                  className="list-item"
                  onClick={() => toggleMobileHandler()}
                >
                  Dashboard
                </NavLink>
                <img className="arrow-down-style" src={Arrow} />
              </li>
              <li className={`list ${location.pathname === '/products' ? 'active-mobile' : ''}`}>
                <img className="icon" src={Bar} />
                <NavLink
                  to="/products"
                  className="list-item"
                  onClick={() => toggleMobileHandler()}
                >
                  Produtos
                </NavLink>
                <img className="arrow-down-style" src={Arrow} />
              </li>
              <li className="list">
                <img className="icon" src={Categories} />
                <a onClick={() => toggleMobileHandler()} className="list-item">
                  Categorias
                </a>
                <img className="arrow-down-style" src={Arrow} />
              </li>
            </ul>
          </nav>
        </motion.div>
      ) : (
        <div className="closed-menu">
          <div onClick={() => toggleMobileHandler()}>
            <img className="menu" src={Categories} />
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuMobile;
