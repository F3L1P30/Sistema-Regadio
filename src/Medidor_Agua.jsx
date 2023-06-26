import React, { useEffect, useState } from 'react';

export function Medidor_Agua() {
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
    return <div>Cargando Datos de agua...</div>;
  }

  return (
    <div>
      <div> {data.medidor}  {data.mes} {data.anyo} {data.hora} {data.dia} </div>
      
    </div>
  );
}
