import React from 'react';
import { Carousel } from 'react-bootstrap';
import NavBare from './NavBare';
import Footer from './Footer';
import './css/index.css';
import imagen from './logo/imagen.jpg';
import imagen2 from './logo/imagen2.jpg';
// import { Prueba } from './Prueba';

function Inicio() {
  return (
    <div className="wrapper">
      <header>
        <NavBare />
      </header>
      <main className="content">
        <div className="container text-center">
          <div className="row justify-content-center">
          <h1 className="title">Sistema de Riego Agrícola Automático</h1>
            <div className="row justify-content-center">
              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block carousel-image"
                    src={imagen}
                    alt="Slide 1"
                  />
                  <Carousel.Caption>
                    <h5>Imagen Ejemplo</h5>
                    <p>DESCRIPCION...</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block carousel-image"
                    src={imagen2}
                    alt="Slide 2"
                  />
                  <Carousel.Caption>
                    <h5>Imagen Ejemplo</h5>
                    <p>DESCRIPCION...</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block carousel-image"
                    src={imagen}
                    alt="Slide 3"
                  />
                  <Carousel.Caption>
                    <h5>Imagen Ejemplo</h5>
                    <p>DESCRIPCION...</p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Inicio;
