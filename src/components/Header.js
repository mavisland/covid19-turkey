import React, { useState } from "react";
import { Container, Collapse, Navbar, NavbarBrand, NavbarToggler, Nav, NavItem } from "reactstrap";
import { NavLink as RouterLink } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="header">
      <Container>
        <Navbar light expand="md">
          <NavbarBrand href="/" className="text-primary">
            Evde Kal Türkiye
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <RouterLink exact className="nav-link" activeClassName="active" to="/">
                  Son Durum
                </RouterLink>
              </NavItem>
              <NavItem>
                <RouterLink className="nav-link" activeClassName="active" to="/haberler">
                  Haberler
                </RouterLink>
              </NavItem>
              <NavItem>
                <RouterLink className="nav-link" activeClassName="active" to="/onlemler">
                  Önlemler
                </RouterLink>
              </NavItem>
              <NavItem>
                <RouterLink className="nav-link" activeClassName="active" to="/belirtiler">
                  Belirtiler
                </RouterLink>
              </NavItem>
              <NavItem>
                <RouterLink className="nav-link" activeClassName="active" to="/dunya">
                  Tüm Dünya
                </RouterLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </Container>
    </div>
  );
}

export default Header;
