
import { Routes, Route } from 'react-router-dom';
import Login from './Login';
import Inicio from './Inicio';
import Consumo_Agua from './Consumo_Agua';
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Inicio" element={<Inicio />} />
        <Route path="/Consumo_Agua" element={<Consumo_Agua />} />
        
        
      </Routes>
    </>
  );
}

export default App;
