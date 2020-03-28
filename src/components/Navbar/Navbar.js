import React from "react";
import "./Navbar.scss";

function Navbar() {
  return (
    <div className="navbar">
      <a href="index.html" className="logo">
        Evde Kal Türkiye
      </a>
      <ul className="menu">
        <li>
          <a href="#">Son Durum</a>
        </li>
        <li>
          <a href="#">Haberler</a>
        </li>
        <li>
          <a href="#">Önlemler</a>
        </li>
        <li>
          <a href="#">Belirtiler</a>
        </li>
        <li>
          <a href="#">Tüm Dünya</a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
