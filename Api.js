const express = require("express");
const mysql = require("mysql2");
const fs = require("fs");
const app = express();
const PORT = 8000;

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456789',
  database: 'modbus'
});

connection.connect((err) => {
  if (err) throw err;
  console.log('¡Conexión establecida exitosamente!');
});

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

// Arreglo para almacenar todos los datos recibidos
let allDataArray = [];

app.get('/modbusid', (req, res) => {
  // Configura una conexión SSE
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');
  res.flushHeaders();

  // Escucha los cambios en la base de datos y envía actualizaciones SSE al cliente
  const query = connection.query("SELECT * FROM modbusid");

  query.stream().on('data', (row) => {
    const eventData = `data: ${JSON.stringify(row)}\n\n`;
    res.write(eventData);

    // Agregar cada dato recibido al inicio del arreglo
    allDataArray.unshift(row);
  }).on('end', () => {
    res.end();
  });
});

// Guardar todos los datos en un archivo JSON cada 15 segundos
setInterval(() => {
  const jsonData = JSON.stringify(allDataArray);

  fs.writeFile('historicos.json', jsonData, 'utf8', (err) => {
    if (err) throw err;
    console.log('Los datos se han guardado exitosamente en historicos.json');
  });

  // Borrar todos los datos del arreglo
  allDataArray = [];
}, 60000); // 1 minuto

app.listen(
  PORT,
  () => console.log(`¡Hola, estoy vivo y me conecté a http://localhost:${PORT}`)
);
