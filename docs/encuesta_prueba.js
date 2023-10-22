document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("encuestaForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const nombre = document.getElementById("nombre").value;
        const apellido = document.getElementById("apellido").value;

        // Aquí puedes enviar los datos al servidor o hacer lo que necesites con ellos
        console.log("Nombre: " + nombre);
        console.log("Apellido: " + apellido);

        // Luego de procesar los datos, puedes enviarlos al servidor a través de una solicitud AJAX
        enviarDatosAlServidor(nombre, apellido);
    });
});

function enviarDatosAlServidor(nombre, apellido) {
    // En lugar de usar mssql en el navegador, aquí se enviarían los datos al servidor para su procesamiento en el lado del servidor.
    // Puedes usar una solicitud AJAX para enviar los datos a un servidor que tenga acceso a la base de datos.

    // Ejemplo de una solicitud AJAX utilizando Fetch API (puede adaptarse a tu backend):
    fetch('/guardar_datos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nombre, apellido }),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Datos enviados con éxito:', data);
    })
    .catch(error => {
        console.error('Error al enviar datos:', error);
    });
}
//Este código agrega la función enviarDatosAlServidor que utiliza Fetch API para enviar los datos al servidor. Debes asegurarte de que el servidor esté configurado para manejar esta solicitud POST en la ruta /guardar_datos y que la lógica del servidor inserte los datos en la base de datos.





