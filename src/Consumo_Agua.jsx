import NavBare from './NavBare';
import Footer from './Footer';
import './css/index.css';
// import { Table } from 'react-bootstrap';
import { MedidorAgua } from './Medidor_Agua';

function Consumo_Agua() {
  return (
    <div className="wrapper">
      <header>
        <NavBare className="navbar-footer" />
      </header>
      <main className="content">
        <div className="container text-center">
          <div className="row justify-content-center">
            <h1 className="title">Consumo de Agua</h1>
            <MedidorAgua />
          </div>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Consumo_Agua;
