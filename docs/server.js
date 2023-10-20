const http = require('http');

const server = http.createServer((req, res) => {
  // Maneja las solicitudes aquí
});

const PORT = 3000; // Puerto en el que se ejecutará el servidor

server.listen(PORT, () => {
  console.log(`Servidor en ejecución en el puerto ${PORT}`);
});
