import { Prueba } from './Prueba';
import { Medidor_Agua } from './Medidor_Agua';
//import { NavBare } from './NavBare';
import NavBare from './NavBare';

function Inicio() {
  return (
    <main>
        <NavBare></NavBare>
      <div className="container text-center ">
        <div className="row justify-content-center">
            <h1>Sistema de Regadio Agrícola Automático</h1>
             <p>CONSUMO ELECTRICO</p>
            <Prueba/>
            <br />
            <p>MEDIDOR AGUA</p>
            <Medidor_Agua/>
        </div>
        <div className="row">
      
        </div>
      </div>

    </main>
  );
}

export default Inicio;
