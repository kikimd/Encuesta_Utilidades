document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("encuestaForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const nombre = document.getElementById("nombre").value;
        const apellido = document.getElementById("apellido").value;

        // Aquí puedes enviar los datos al servidor
        enviarDatosAlServidor(nombre, apellido);
    });
});

function enviarDatosAlServidor(nombre, apellido) {
    // Configura la solicitud AJAX
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "/guardar_datos");
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

    // Crea un objeto con los datos a enviar
    const datos = {
        nombre: nombre,
        apellido: apellido
    };

    // Convierte los datos a formato JSON
    const datosJSON = JSON.stringify(datos);

    // Define una función para manejar la respuesta del servidor
    xhr.onload = function () {
        if (xhr.status === 200) {
            console.log('Datos enviados con éxito:', xhr.responseText);
        } else {
            console.error('Error al enviar datos:', xhr.statusText);
        }
    };

    // Envía la solicitud con los datos en formato JSON
    xhr.send(datosJSON);
}
