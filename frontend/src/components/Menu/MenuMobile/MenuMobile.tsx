/// <reference types="vite-plugin-svgr/client" />
import { useState } from "react";
import { motion } from "framer-motion";

import logo from "../../../assets/logo.png";
import Dashboard from "../../../assets/dashboard.svg?react";
import Arrow from "../../../assets/chevron-down.svg?react";
import Bar from "../../../assets/bar.svg?react";
import Categories from "../../../assets/menu.svg?react";

import "./MenuMobile.scss"


const MenuMobile = () => {
    const [toggleMobile, setToggleMobile] = useState(true);

    const toggleMobileHandler = () => {
        setToggleMobile(!toggleMobile);
      };

  return (
    <div className="mobile-only">
        {!toggleMobile ? (
          <motion.div
          whileInView={{ y: [-800, 0] }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <nav className="container">
            <img className="logo-image" src={logo} />
            <ul>
              <li className="list">
                <Dashboard className="icon" />
                <a className="list-item">Dashboard</a>
                <Arrow className="icon" />
              </li>
              <li className="list">
                <Bar className="icon" />
                <a className="list-item">Produtos</a>
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
  )
}

export default MenuMobile