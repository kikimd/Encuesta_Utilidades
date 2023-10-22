document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("encuestaForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const nombre = document.getElementById("nombre").value;
        const apellido = document.getElementById("apellido").value;

        // Aquí puedes enviar los datos a tu servidor o hacer lo que necesites con ellos
        console.log("Nombre: " + nombre);
        console.log("Apellido: " + apellido);

        //código para enviar datos a la base de datos
        const sql = require('mssql');

        const config = {
            user: 'dbadmin',
            password: 'SC123456789*',
            server: 'sistemascontrolserver.database.windows.net',
            database: 'bdanalisiscostos',
        };
        
        document.addEventListener("DOMContentLoaded", function () {
            const form = document.getElementById("encuestaForm");
        
            form.addEventListener("submit", function (event) {
                event.preventDefault();
        
                const nombre = document.getElementById("nombre").value;
                const apellido = document.getElementById("apellido").value;
        
                // Establecer la conexión a la base de datos
                sql.connect(config, (err) => {
                    if (err) {
                        console.error('Error al conectar a la base de datos:', err);
                        return;
                    }
        
                    // Crear una nueva solicitud
                    const request = new sql.Request();
        
                    // Consulta SQL para insertar los datos en la tabla "Encuesta"
                    request.query(`INSERT INTO Encuesta (Nombre, Apellido) VALUES ('${nombre}', '${apellido}')`, (err, result) => {
                        if (err) {
                            console.error('Error al insertar datos:', err);
                        } else {
                            console.log('Datos insertados con éxito.');
                        }
        
                        // Cerrar la conexión a la base de datos
                        sql.close();
                    });
                });
            });
        });
    });
});
