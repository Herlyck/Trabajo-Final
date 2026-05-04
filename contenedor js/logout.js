function desloguear() {
    // 1. Limpiamos sesión
    sessionStorage.clear();
    localStorage.removeItem('usuarioLogueado');
    
    alert("Sesión cerrada correctamente.");
    
    // 2. Redirección inteligente:
    // Buscamos si estamos dentro de la carpeta "contenedor html"
    if (window.location.pathname.includes('contenedor%20html') || window.location.pathname.includes('contenedor html')) {
        window.location.href = "../index.html";
    } else {
        window.location.href = "index.html";
    }
}

function actualizarInterfazUsuario() {
    const btnLogout = document.getElementById('btn-logout');
    
    // Buscamos TODOS los enlaces que puedan ser el de registro
    const links = document.querySelectorAll('a');
    let linkRegistro = null;

    links.forEach(l => {
        if (l.href.includes('registrarse.html')) {
            linkRegistro = l;
        }
    });

    const logueado = sessionStorage.getItem('usuarioLogueado');

    if (logueado === "true") {
        if (btnLogout) btnLogout.style.display = "inline-block";
        if (linkRegistro) linkRegistro.style.display = "none"; 
    } else {
        if (btnLogout) btnLogout.style.display = "none";
        if (linkRegistro) linkRegistro.style.display = "inline-block";
    }
}

// Ejecutar siempre al cargar
document.addEventListener('DOMContentLoaded', actualizarInterfazUsuario);