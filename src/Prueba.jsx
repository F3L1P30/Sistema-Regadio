import React, { useEffect, useState } from 'react';

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
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <div> {data.voltaje}  {data.potencia} {data.corriente} {data.factor_potencia} {data.frecuencia} {data.energia_consumida}</div>
      
    </div>
  );
}
