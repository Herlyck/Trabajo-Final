function desloguear() {
    // Limpiamos la sesión
    sessionStorage.removeItem('usuarioLogueado');
    sessionStorage.removeItem('nombreUsuario');
    
    alert("Sesión cerrada correctamente.");
    
    // Redirigir al index dependiendo de dónde estemos
    if (window.location.pathname.includes('contenedor html')) {
        window.location.href = "../index.html";
    } else {
        window.location.href = "index.html";
    }
}

// Esta función se encarga de mostrar u ocultar el botón
function actualizarBotonLogout() {
    const btnLogout = document.getElementById('btn-logout');
    
    // IMPORTANTE: Revisamos AMBOS por si acaso quedó algo en localStorage
    const logueadoSession = sessionStorage.getItem('usuarioLogueado');
    const logueadoLocal = localStorage.getItem('usuarioLogueado');

    if (btnLogout) {
        if (logueadoSession === "true" || logueadoLocal === "true") {
            btnLogout.style.display = "inline-block";
            console.log("Usuario detectado. Mostrando botón.");
        } else {
            btnLogout.style.display = "none";
            console.log("No hay usuario. Botón oculto.");
        }
    }
}

// Ejecutar cuando carga la página
document.addEventListener('DOMContentLoaded', actualizarBotonLogout);

// Ejecutar también inmediatamente por si el DOM ya cargó
actualizarBotonLogout();