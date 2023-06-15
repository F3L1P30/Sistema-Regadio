import React, { useEffect, useState } from 'react';

export function Prueba() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const eventSource = new EventSource('http://localhost:8000/modbusid');

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
      <div>{data.id_1}  {data.id_2} {data.id_3} {data.id_4} {data.id_5}</div>
      
    </div>
  );
}
