import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

export default function Graficos({ datosHistoricos }) {
  var indices = [...Array(11).keys()]; // Genera un array del 0 al 10
  var voltajeData = datosHistoricos.map((dato) => dato.voltaje);
  var potenciaData = datosHistoricos.map((dato) => dato.potencia);

  var voltajeDataset = {
    label: 'Voltaje',
    data: voltajeData,
    tension: 0.5,
    fill: true,
    borderColor: 'rgb(255, 99, 132)',
    backgroundColor: 'rgba(255, 99, 132, 0.5)',
    pointRadius: 5,
    pointBorderColor: 'rgba(255, 99, 132)',
    pointBackgroundColor: 'rgba(255, 99, 132)',
  };

  var potenciaDataset = {
    label: 'Potencia Activa',
    data: potenciaData,
    tension: 0.5,
    fill: true,
    borderColor: 'rgb(54, 162, 235)',
    backgroundColor: 'rgba(54, 162, 235, 0.5)',
    pointRadius: 5,
    pointBorderColor: 'rgba(54, 162, 235)',
    pointBackgroundColor: 'rgba(54, 162, 235)',
  };

  var voltajeDataConfig = {
    labels: indices,
    datasets: [voltajeDataset],
  };

  var potenciaDataConfig = {
    labels: indices,
    datasets: [potenciaDataset],
  };

  var options = {
    scales: {
      y: {
        min: 0,
      },
      x: {
        ticks: { color: 'rgb(255, 99, 132)' },
      },
    },
  };

  return (
    <div>
      <Line data={voltajeDataConfig} options={options} />
      <Line data={potenciaDataConfig} options={options} />
    </div>
  );
}