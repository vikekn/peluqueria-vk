document.addEventListener('DOMContentLoaded', function() {
    iniciarApp();
});

function iniciarApp() {
    buscarPorFecha();
}

// Esta función busca elementos del DOM con el ID 'fecha' y agrega un evento
// 'input' que se dispara cuando se introduce texto en el campo de fecha.
function buscarPorFecha() {
    // Busca el elemento del DOM con el ID 'fecha' y lo almacena en 'fechaInput'.
    const fechaInput = document.querySelector('#fecha');
    
    // Agrega un evento 'input' al elemento 'fechaInput'.
    fechaInput.addEventListener('input', function(e) {
        // Obtiene el valor seleccionado en el campo de fecha.
        const fechaSeleccionada = e.target.value;

        // Cambia la URL de la página para incluir el parámetro 'fecha' con el valor seleccionado.
        // Esto redirige a la misma página con el parámetro 'fecha' en la URL.
        window.location = `?fecha=${fechaSeleccionada}`;
    });
}
