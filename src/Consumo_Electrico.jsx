import NavBare from './NavBare';
import Footer from './Footer';
import './css/index.css';
// import { Table } from 'react-bootstrap';
import { Prueba } from './Prueba';

function Consumo_Electrico() {
  return (
    <div className="wrapper">
      <header>
        <NavBare />
      </header>
      <main className="content">
        <div className="container text-center">
          <div className="row justify-content-center">
            <h1 className="title">Consumo Eléctrico</h1>
            <Prueba />
          </div>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Consumo_Electrico;
