import React, { useEffect, useRef, useState } from 'react';
import { Table } from 'react-bootstrap';
import './css/medidor.css';
import Graficos from './Graficos';

export function Prueba() {
  const [data, setData] = useState(null);
  const datosHistoricosRef = useRef([]);

  useEffect(() => {
    const eventSource = new EventSource('http://162.212.152.155:8000/modbusid');

    eventSource.onmessage = (event) => {
      const newData = JSON.parse(event.data);
      setData(newData);

      datosHistoricosRef.current = [
        { voltaje: newData.voltaje, potencia: newData.potencia },
        ...datosHistoricosRef.current.slice(0, 9),
      ];
    };

    return () => {
      eventSource.close();
    };
  }, []);

  if (data === null) {
    return (
      <div className="loading-container">
        <div className="loading-dots">
          <div className="loading-dot"></div>
          <div className="loading-dot"></div>
          <div className="loading-dot"></div>
        </div>
      </div>
    );
  }

  return (
    <div>
      

      <Table striped bordered>
        <thead>
          <tr>
            <th>Voltaje</th>
            <th>Potencia</th>
            <th>Corriente</th>
            <th>Factor de Potencia</th>
            <th>Frecuencia</th>
            <th>Energía Consumida</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{data.voltaje} [Volt]</td>
            <td>{data.potencia} [W]</td>
            <td>{data.corriente}[A]</td>
            <td>{data.factor_potencia}</td>
            <td>{data.frecuencia}[Hz]</td>
            <td>{data.energia_consumida}[Kwh]</td>
          </tr>
        </tbody>
      </Table>
      <div className="d-flex">
        <div style={{ width: "450px", height: "230px", marginRight: "20px"}}>
          <Graficos datosHistoricos={datosHistoricosRef.current} />
        </div>
        <div>
          <h2>Registro Últimos Datos</h2>
          <Table striped bordered>
            <thead>
              <tr>
                <th>Voltaje</th>
                <th>Potencia</th>
              </tr>
            </thead>
            <tbody>
              {datosHistoricosRef.current.map((dato, index) => (
                <tr key={index}>
                  <td>{dato.voltaje}</td>
                  <td>{dato.potencia}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>

    </div>
  );
}