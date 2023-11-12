document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('siguiente').addEventListener('click', function(event) {
        event.preventDefault(); // Evita que el formulario se envíe por defecto

        const rubroSeleccionado = document.getElementById('rubro').value;

        if (rubroSeleccionado === 'belleza') {
            window.location.href = 'Belleza/belleza.html';
            const nombre = document.getElementById('nombre').value;
            const edad = document.getElementById('edad').value;
            const correo = document.getElementById('correo').value;
            const telefono = document.getElementById('telefono').value;
            const resultados = document.getElementById('resultados').value;
            const recomendaciones = document.getElementById('recomendaciones').value;
            const nombre_empresa = document.getElementById('nombre_empresa').value;
            const estado = document.getElementById('estado').value;
            const ciudad = document.getElementById('ciudad').value;
            const colonia = document.getElementById('colonia').value;
            const rubro = document.getElementById('rubro').value;

            enviarProductoHojaCalculo(nombre, edad, correo, telefono, resultados, recomendaciones, nombre_empresa, estado, ciudad, colonia, rubro);
        } else if (rubroSeleccionado === 'textil') {
            window.location.href = 'Textil/textil.html';
            const nombre = document.getElementById('nombre').value;
            const edad = document.getElementById('edad').value;
            const correo = document.getElementById('correo').value;
            const telefono = document.getElementById('telefono').value;
            const resultados = document.getElementById('resultados').value;
            const recomendaciones = document.getElementById('recomendaciones').value;
            const nombre_empresa = document.getElementById('nombre_empresa').value;
            const estado = document.getElementById('estado').value;
            const ciudad = document.getElementById('ciudad').value;
            const colonia = document.getElementById('colonia').value;
            const rubro = document.getElementById('rubro').value;

            enviarProductoHojaCalculo(nombre, edad, correo, telefono, resultados, recomendaciones, nombre_empresa, estado, ciudad, colonia, rubro);
        }
        alert("Información enviada con éxito.");
    });
});

async function enviarProductoHojaCalculo(nombre, edad, correo, telefono, resultados, recomendaciones, nombre_empresa, estado, ciudad, colonia, rubro) {
    try {

        const respuesta = await fetch("https://sheet.best/api/sheets/d3f7e817-4130-4931-a597-c7638d7e0893",{
        //const respuesta = await fetch('https://sheet.best/api/sheets/d3f7e817-4130-4931-a597-c7638d7e0893', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "Nombre": nombre,
                "Edad": edad,
                "Correo": correo,
                "Teléfono": telefono,
                "Resultados": resultados,
                "Recomendaciones": recomendaciones,
                "Nombre de la Empresa": nombre_empresa,
                "Estado": estado,
                "Ciudad": ciudad,
                "Colonia": colonia,
                "Rubro": rubro           
            })
        });

        const contenido = await respuesta.json();
        console.log(contenido);
    } catch (error) {
        console.log(error);
    }
}