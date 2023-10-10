const mysql = require('mysql');

const connection = mysql.createConnection({
  host: '34.69.100.86',
  user: 'proyecto-inventarios',
  password: 'Ssd54cf4',
  database: 'Pruebas'
});

connection.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos: ' + err.stack);
    return;
  }

  console.log('Conexión exitosa a la base de datos con el ID: ' + connection.threadId);
});

// Resto del código de manipulación de la base de datos aquí

module.exports = connection;

const connection = require('./app');

document.getElementById('registroForm').addEventListener('submit', (e) => {
  e.preventDefault();

  const nombre = document.getElementById('nombre').value;
  const email = document.getElementById('email').value;

  const query = `INSERT INTO usuarios (nombre, email) VALUES ('${nombre}', '${email}')`;

  connection.query(query, (error, results, fields) => {
    if (error) throw error;
    document.getElementById('mensaje').innerHTML = 'Usuario registrado con éxito';
  });
});

