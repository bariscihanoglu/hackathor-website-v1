import React, {useRef} from "react";
// import { FaBars, FaTimes } from "react-icons/fa";
import {hackhathorLogo} from '../Assets'
import "../CSS/Navbar.css";

function Navbar() {
  {
    return (
      <div className="navBar">
      <header class="header">
      <img src={hackhathorLogo}/>
      <nav class="navbar">
        <a href="#about">Hakkında</a>
        <a href="#team">Koordinatörler</a>
        <a href="#footer">İletişim</a>
      </nav>
      </header>
      </div>
    )
  }
}
export default Navbar;