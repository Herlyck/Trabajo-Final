function desloguear() {
    // 1. Limpiamos TODO lo relacionado a la sesión
    sessionStorage.removeItem('usuarioLogueado');
    sessionStorage.removeItem('nombreUsuario');
    
    // También limpiamos localStorage por si quedó basura de pruebas anteriores
    localStorage.removeItem('usuarioLogueado');
    
    // Usamos el modal que creamos antes en lugar del alert (si ya lo tenés cargado)
    alert("Sesión cerrada correctamente.");
    
    // 2. Redirigir al index
    if (window.location.pathname.includes('contenedor html')) {
        window.location.href = "../index.html";
    } else {
        window.location.href = "index.html";
    }
}

function actualizarInterfazUsuario() {
    const btnLogout = document.getElementById('btn-logout');
    const linkRegistro = document.querySelector('a[href*="registrarse.html"]'); // Busca el link de registro
    
    const logueado = sessionStorage.getItem('usuarioLogueado');

    if (logueado === "true") {
        // --- USUARIO LOGUEADO ---
        if (btnLogout) btnLogout.style.display = "inline-block";
        if (linkRegistro) linkRegistro.style.display = "none"; // Ocultamos "Registro"
    } else {
        // --- USUARIO INVISIBLE ---
        if (btnLogout) btnLogout.style.display = "none";
        if (linkRegistro) linkRegistro.style.display = "inline-block"; // Mostramos "Registro"
    }
}

// Ejecutar al cargar el documento
document.addEventListener('DOMContentLoaded', actualizarInterfazUsuario);