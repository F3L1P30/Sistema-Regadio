import './css/index.css';
import { Routes, Route } from 'react-router-dom';
// import Login from './Login';
import Inicio from './Inicio';
import ConsumoAgua from './Consumo_Agua';
import ConsumoElectrico from './Consumo_Electrico';
import Acerca from './Acerca';
import Contacto from './Contacto';
import Historicos from './Historicos';

function App() {
  return (
    <>
      <Routes>
        {/* <Route path="/" element={<Login />} /> */}
        <Route path="/" element={<Inicio />} />
        <Route path="/Consumo_Agua" element={<ConsumoAgua />} />
        <Route path="/Consumo_Electrico" element={<ConsumoElectrico />} />
        <Route path="/Acerca" element={<Acerca />} />
        <Route path="/Contacto" element={<Contacto />} />
        <Route path="/Historicos" element={<Historicos />} />
      </Routes>
    </>
  );
}

export default App;

