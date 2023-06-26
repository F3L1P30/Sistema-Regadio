const express = require("express");
const mysql = require("mysql");
const app = express();
const PORT = 8000;

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'prueba',
  password: '123456',
  port: '3306',
  database: 'modbus'
});

connection.connect((err) => {
  if (err) throw err;
  console.log('¡Conexión establecida exitosamente!');
});

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://162.212.152.155:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

//CONSUMO ELECTRICO
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

// app.post('/modbusid', (req, res) => {
//   const datos = req.body;

//   // Insertar los datos en la base de datos
//   const query = connection.query('INSERT INTO modbusid SET ?', datos, (error, results) => {
//     if (error) {
//       console.error('Error al insertar los datos:', error);
//       res.status(500).json({ mensaje: 'Error al insertar los datos' });
//     } else {
//       console.log('Datos insertados correctamente');
//       res.json({ mensaje: 'Datos insertados correctamente' });
//     }
//   });

//   console.log('Datos recibidos:', datos);
// });

app.post('/modbusid', (req, res) => {
  const datos = req.body;

  // Actualizar los datos en la base de datos
  const query = connection.query('UPDATE modbusid SET ? WHERE id = ?', [datos, datos.id], (error, results) => {
    if (error) {
      console.error('Error al actualizar los datos:', error);
      res.status(500).json({ mensaje: 'Error al actualizar los datos' });
    } else {
      console.log('Datos actualizados correctamente');
      res.json({ mensaje: 'Datos actualizados correctamente' });
    }
  });

  console.log('Datos recibidos:', datos);
});



app.delete('/modbusid/:id', (req, res) => {
  const id = req.params.id;

  // Realizar la eliminación en la base de datos
  const query = connection.query('DELETE FROM modbusid WHERE id = ?', id, (error, results) => {
    if (error) {
      console.error('Error al eliminar los datos:', error);
      res.status(500).json({ mensaje: 'Error al eliminar los datos' });
    } else {
      console.log('Datos eliminados correctamente');
      res.json({ mensaje: 'Datos eliminados correctamente' });
    }
  });

  console.log('ID recibido:', id);
});

//******************************************************************* */
//MEDIDOR DE AGUA
//******************************************************************* */

app.get('/medidor_agua', (req, res) => {
  // Configura una conexión SSE
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');
  res.flushHeaders();

  // Escucha los cambios en la base de datos y envía actualizaciones SSE al cliente
  const query = connection.query("SELECT * FROM medidor_agua");
  query.stream().on('data', (row) => {
    const eventData = `data: ${JSON.stringify(row)}\n\n`;
    res.write(eventData);
  }).on('end', () => {
    res.end();
  });
});

app.post('/medidor_agua', (req, res) => {
  const datos = req.body;

  // Actualizar los datos en la base de datos
  const query = connection.query('UPDATE medidor_agua SET ? WHERE id = ?', [datos, datos.id], (error, results) => {
    if (error) {
      console.error('Error al actualizar los datos:', error);
      res.status(500).json({ mensaje: 'Error al actualizar los datos' });
    } else {
      console.log('Datos actualizados correctamente');
      res.json({ mensaje: 'Datos actualizados correctamente' });
    }
  });

  console.log('Datos recibidos:', datos);
});

// app.post('/modbusid', (req, res) => {
//   const datos = req.body;

//   // Insertar los datos en la base de datos
//   const query = connection.query('INSERT INTO modbusid SET ?', datos, (error, results) => {
//     if (error) {
//       console.error('Error al insertar los datos:', error);
//       res.status(500).json({ mensaje: 'Error al insertar los datos' });
//     } else {
//       console.log('Datos insertados correctamente');
//       res.json({ mensaje: 'Datos insertados correctamente' });
//     }
//   });

//   console.log('Datos recibidos:', datos);
// });

app.delete('/medidor_agua/:id', (req, res) => {
  const id = req.params.id;

  // Realizar la eliminación en la base de datos
  const query = connection.query('DELETE FROM medidor_agua WHERE id = ?', id, (error, results) => {
    if (error) {
      console.error('Error al eliminar los datos:', error);
      res.status(500).json({ mensaje: 'Error al eliminar los datos' });
    } else {
      console.log('Datos eliminados correctamente');
      res.json({ mensaje: 'Datos eliminados correctamente' });
    }
  });

  console.log('ID recibido:', id);
});


app.listen(
  PORT,
  () => console.log(`¡Hola, estoy vivo y me conecté a http://localhost:${PORT}`)
);
