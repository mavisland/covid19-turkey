import React from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div className="container">
        <div className="navbar">
          <Link to="/" exact className="logo">
            Evde Kal Türkiye
          </Link>
          <ul className="menu">
            <li>
              <NavLink exact activeClassName="active" to="/">
                Son Durum
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/haberler">
                Haberler
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/onlemler">
                Önlemler
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/belirtiler">
                Belirtiler
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/dunya">
                Tüm Dünya
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
