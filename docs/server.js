const express = require('express');
const bodyParser = require('body-parser');
const sql = require('mssql');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Configuración de conexión a la base de datos
const dbConfig = {
  user: 'dbadmin',
  password: 'SC123456789*',
  server: 'sistemascontrolserver.database.windows.net',
  database: 'bdanalisiscostos',
};


// Ruta para manejar solicitudes GET en la raíz de la aplicación
app.get('/', (req, res) => {
  // Debes enviar la página HTML que contiene el formulario de encuesta aquí.
  // Por ejemplo:
  res.sendFile(__dirname + '/encuesta_prueba.html');
});



// Ruta para manejar la inserción de datos desde la encuesta
app.post('/guardar_datos', async (req, res) => {
  const nombre = req.body.nombre;
  const apellido = req.body.apellido;

  try {
    // Conéctate a la base de datos
    const pool = await new sql.ConnectionPool(dbConfig).connect();

    // Ejecuta una consulta SQL para insertar datos en la tabla
    const query = `INSERT INTO Encuesta_prueba (nombre, apellido) VALUES ('${nombre}', '${apellido}')`;
    const result = await pool.request().query(query);

    // Cierra la conexión
    pool.close();

    res.status(200).json({ message: 'Datos guardados exitosamente' });
  } catch (error) {
    console.error('Error al insertar datos en la base de datos:', error);
    res.status(500).json({ error: 'Error al insertar datos en la base de datos' });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor en ejecución en el puerto ${PORT}`);
});