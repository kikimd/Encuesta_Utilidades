const http = require('http');
const sql = require('mssql');

const dbConfig = {
  user: 'dbadmin',
  password: 'SC123456789*',
  server: 'sistemascontrolserver.database.windows.net',
  database: 'bdanalisiscostos',
};

const server = http.createServer(async (req, res) => {
  try {
    // Conéctate a la base de datos
    await sql.connect(dbConfig);
    console.log('Conexión a la base de datos exitosa');

    // Realiza una consulta
    const result = await sql.query('SELECT * FROM resultados');

    // Maneja las solicitudes aquí
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(result.recordset)); // Envia la respuesta con los resultados de la consulta
  } catch (err) {
    console.error('Error al conectar a la base de datos:', err);
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Error al conectar a la base de datos MSSQL');
  }
});

const PORT = 3000; // Puerto en el que se ejecutará el servidor
server.listen(PORT, () => {
  console.log(`Servidor en ejecución en el puerto ${PORT}`);
});