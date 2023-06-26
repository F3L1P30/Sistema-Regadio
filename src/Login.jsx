//import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
//import Logo from '../assets/img/logo2.jpeg';

function Login() {
  /*const enviar = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
  };*/

  return (


      <div className="container d-flex flex-column align-items-center mt-5">
        <img className="rounded-circle" style={{ width: '25%' }}  alt="" />
        <form style={{ width: '50%' }}>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" name="email" placeholder="Ingresar Email" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Contraseña</Form.Label>
            <Form.Control type="password" name="password" placeholder="Ingresar Contraseña" />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <br />
          
          <Button variant="btn btn-outline-primary" type="submit">
            <Link to="/Inicio" className="link-button">Iniciar sesión</Link>
          </Button>
          <br />
          <Link to="/Inicio" >Registrarse</Link>
        </form>
      </div>

  );
}

export default Login;