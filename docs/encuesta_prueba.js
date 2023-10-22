document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("encuestaForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const nombre = document.getElementById("nombre").value;
        const apellido = document.getElementById("apellido").value;

        // Aquí puedes enviar los datos a tu servidor o hacer lo que necesites con ellos
        console.log("Nombre: " + nombre);
        console.log("Apellido: " + apellido);
    });
});
