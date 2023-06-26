import { NavLink } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';

function Navbare() {
    return (
        <header>
            <Navbar expand="lg">
                <Container>
                    <NavLink to="/" className="nav-link ">
                        TryAll
                    </NavLink>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink to="/" className="nav-link" >
                                Inicio
                            </NavLink>
                            <NavLink to="/acerca" className="nav-link"  >
                                Acerca de nosotros
                            </NavLink>
                            <NavLink to="/contacto" className="nav-link letra"  >
                                Contacto
                            </NavLink>
                            <NavLink to="/Consumo_Electrico" className="nav-link letra"  >
                                Consumo eléctrico
                            </NavLink>
                            <NavLink to="/Consumo_Agua" className="nav-link letra"  >
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
