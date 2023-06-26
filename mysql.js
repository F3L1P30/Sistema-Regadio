const mysql = require('mysql');
const fs = require('fs');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  port: '3306',
  database: 'modbus',
});

connection.connect((err) => {
  if (err) throw err;
  console.log('¡Conexión establecida exitosamente!');
});

// Función para realizar la consulta y guardar los datos en el archivo JSON
const saveDataToJson = () => {
  connection.query('SELECT * FROM modbusid', (err, rows) => {
    if (err) throw err;

    console.log('Los datos solicitados son:');
    console.log(rows);

    // Convertir los datos a formato JSON
    const jsonData = JSON.stringify(rows);

    // Escribir los datos en un archivo JSON
    fs.writeFile('historico.json', jsonData, 'utf8', (err) => {
      if (err) throw err;
      console.log('Los datos se han copiado exitosamente a datos.json');
    });
  });
};

// Ejecutar la función inicialmente
saveDataToJson();

// Ejecutar la función cada 15 segundos
setInterval(saveDataToJson, 15000);

connection.end();
