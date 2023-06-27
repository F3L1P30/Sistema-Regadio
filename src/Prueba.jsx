import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import './css/medidor.css';
export function Prueba() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const eventSource = new EventSource('http://162.212.152.155:8000/modbusid');

    eventSource.onmessage = (event) => {
      const newData = JSON.parse(event.data);
      setData(newData);
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
            <td>{data.voltaje}</td>
            <td>{data.potencia}</td>
            <td>{data.corriente}</td>
            <td>{data.factor_potencia}</td>
            <td>{data.frecuencia}</td>
            <td>{data.energia_consumida}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
