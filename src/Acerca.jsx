import React from 'react';
import NavBare from './NavBare';
import Footer from './Footer';
import './css/index.css'; // Archivo CSS para estilos personalizados

function Acerca() {
  return (
    <div className="wrapper">
      <header>
        <NavBare className="navbar-footer" />
      </header>
      <main className="content">
        <div className="container text-center">
          <div className="row justify-content-center">
            <h1 className="title">Acerca de nosotros</h1>
            <br />
            <div className="circle">
              <div className="circle-content">
                <p className="circle-text">
                  Empresa creada por ingenieros de diversas especialidades y con vasta experiencia en sus respectivos campos,
                  con el objetivo de solucionar los problemas de nuestros clientes,
                  encontrando la solución más óptima al aplicar ingeniería de distintas áreas.
                </p>
              </div>
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

export default Acerca;