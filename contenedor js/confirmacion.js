document.addEventListener('DOMContentLoaded', function() {
    // 1. SEGURIDAD: Si no está logueado, lo mandamos al registro
    if (sessionStorage.getItem('usuarioLogueado') !== "true") {
        window.location.href = "registrarse.html";
        return; 
    }

    // 2. CAPTURA DE ELEMENTOS DEL HTML
    const mostrarSede = document.getElementById('mostrar-sede');
    const mostrarDia = document.getElementById('mostrar-dia');
    const mostrarHora = document.getElementById('mostrar-hora');
    const mostrarCantidad = document.getElementById('mostrar-cantidad');

    // 3. RECUPERAR DATOS Y MOSTRARLOS
    // Usamos || "..." para que si falta un dato, no quede vacío el texto
    if (mostrarSede) {
        mostrarSede.innerText = localStorage.getItem('sedeSeleccionada') || "No seleccionada";
    }
    if (mostrarDia) {
        mostrarDia.innerText = localStorage.getItem('diaSeleccionado') || "No seleccionado";
    }
    if (mostrarHora) {
        mostrarHora.innerText = localStorage.getItem('horaSeleccionada') || "No seleccionada";
    }
    if (mostrarCantidad) {
        mostrarCantidad.innerText = localStorage.getItem('cantidadEntradas') || "0";
    }

    // 4. LÓGICA DEL BOTÓN FINALIZAR
    const botonFinalizar = document.getElementById('boton-finalizar');
    if (botonFinalizar) {
        botonFinalizar.addEventListener('click', function() {
            alert("¡Compra realizada con éxito! Gracias por elegir Cine Code.");
            
            // Limpiamos los datos de la compra para que no queden para la próxima
            localStorage.removeItem('sedeSeleccionada');
            localStorage.removeItem('diaSeleccionado');
            localStorage.removeItem('horaSeleccionada');
            localStorage.removeItem('cantidadEntradas');
            localStorage.removeItem('peliSeleccionada');
            
            // Volvemos al inicio (index.html está una carpeta arriba)
            window.location.href = "../index.html";
        });
    }
});

// Función para el botón Volver Atrás
function botonatras2() {
    window.history.back();
}








































