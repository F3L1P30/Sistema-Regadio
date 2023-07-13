import NavBare from './NavBare';
import Footer from './Footer';
import './css/index.css';
import { DatosHistoricos } from './Datos_Historicos';
function Historicos() {
  return (
    <div className="wrapper">
      <header>
        <NavBare className="navbar-footer" />
      </header>
      <main className="content">
        <div className="container text-center">
          <div className="row justify-content-center">
            <h1 className="title">Historicos</h1>
            <DatosHistoricos />
          </div>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Historicos;
