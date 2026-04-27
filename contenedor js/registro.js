function enviarRegistro() {
    // 1. Capturamos los datos básicos
    const nombre = document.getElementById('Nombre').value;
    const email = document.getElementById('Email').value;
    const acepta = document.getElementById('acepta-condicion').checked;

    if (nombre === "" || email === "" || !acepta) {
        alert("Por favor, completa todos los campos y acepta las condiciones.");
        return;
    }

    // 2. ¡EL CAMBIO CLAVE!: Usar sessionStorage en lugar de localStorage
    // Esto hace que el login se borre al cerrar la pestaña y que logout.js lo encuentre
    sessionStorage.setItem('usuarioLogueado', 'true');
    sessionStorage.setItem('nombreUsuario', nombre);

    // 3. Decidimos a dónde enviarlo
    const hayCompraPendiente = localStorage.getItem('diaSeleccionado');

    if (hayCompraPendiente) {
        window.location.href = "confirmacion.html";
    } else {
        // Asegúrate de que esta ruta sea correcta para volver al index desde la carpeta html
        window.location.href = "../index.html";
    }
}