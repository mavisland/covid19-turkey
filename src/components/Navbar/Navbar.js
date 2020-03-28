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
          <a href="#sonDurum">Son Durum</a>
        </li>
        <li>
          <a href="#haberler">Haberler</a>
        </li>
        <li>
          <a href="#onlemler">Önlemler</a>
        </li>
        <li>
          <a href="#belirtiler">Belirtiler</a>
        </li>
        <li>
          <a href="#dunya">Tüm Dünya</a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
