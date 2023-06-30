import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from './logo/Recurso-1.png'; 
import './css/navbar.css';

function Navbare() {
  return (
    <header>
      <Navbar expand="lg" className="navbar-custom">
        <Container>
          <NavLink to="/" className="nav-link nav-link-large">
            <img src={logo} alt="Logo" className="navbar-logo" />
          </NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <NavLink exact to="/" className="nav-link" activeClassName="active">
                Inicio
              </NavLink>
              <NavLink to="/Acerca" className="nav-link" activeClassName="active">
                Acerca de nosotros
              </NavLink>
              <NavLink to="/Contacto" className="nav-link letra" activeClassName="active">
                Contacto
              </NavLink>
              <NavLink to="/Consumo_Electrico" className="nav-link letra" activeClassName="active">
                Consumo eléctrico
              </NavLink>
              <NavLink to="/Consumo_Agua" className="nav-link letra" activeClassName="active">
                Consumo de agua
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Navbare;

