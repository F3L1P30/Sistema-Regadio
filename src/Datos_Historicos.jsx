import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import './css/medidor.css';

export function DatosHistoricos() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const eventSource = new EventSource('http://162.212.152.155:8000/modbus_historico');

    eventSource.onmessage = (event) => {
      const newData = JSON.parse(event.data);
      setData((prevData) => {
        const updatedData = [...prevData, newData];

        // Limitar la cantidad de datos acumulados a 10
        if (updatedData.length > 10) {
          updatedData.shift(); // Eliminar el dato más antiguo
        }

        return updatedData;
      });
    };

    return () => {
      eventSource.close();
    };
  }, []);

  if (data.length === 0) {
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
            <th colSpan="8">Datos Historicos</th>
          </tr>
          <tr>
            <th>Voltaje</th>
            <th>Potencia</th>
            <th>Corriente</th>
            <th>Factor de Potencia</th>
            <th>Frecuencia</th>
            <th>Energía Consumida</th>
            <th>Fecha</th>
            <th>Hora</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            const fechaHora = new Date(item.fecha);
            const fecha = fechaHora.toLocaleDateString();
            const hora = fechaHora.toLocaleTimeString();

            return (
              <tr key={index}>
                <td>{item.voltaje} [Volt]</td>
                <td>{item.potencia} [W]</td>
                <td>{item.corriente} [A]</td>
                <td>{item.factor_potencia}</td>
                <td>{item.frecuencia} [Hz]</td>
                <td>{item.energia_consumida} [Kwh]</td>
                <td>{fecha}</td>
                <td>{hora}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}
