const express = require("express");
const mysql = require("mysql2");
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
  }).on('end', () => {
    res.end();
  });
});




app.listen(
  PORT,
  () => console.log(`¡Hola, estoy vivo y me conecté a http://localhost:${PORT}`)
);
