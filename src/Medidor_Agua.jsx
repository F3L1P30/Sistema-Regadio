import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import './css/medidor.css';
export function MedidorAgua() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const eventSource = new EventSource('http://162.212.152.155:8000/medidor_agua');

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
            <th>Medidor</th>
            <th>Mes</th>
            <th>Año</th>
            <th>Hora UTC</th>
            <th>Día</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{data.medidor} [m3]</td>
            <td>{data.mes}</td>
            <td>{data.anyo}</td>
            <td>{data.hora}</td>
            <td>{data.dia}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
