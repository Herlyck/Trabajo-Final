document.addEventListener('DOMContentLoaded', function() {
    const botonSeleccionar = document.querySelectorAll('#boton-seleccionar');
    const imagenPeli = document.getElementById('imagen-peli-horario');

    // Cargar la imagen de la película seleccionada previamente
    const peliGuardada = localStorage.getItem('peliSeleccionada');
    if (peliGuardada && imagenPeli) {
        imagenPeli.src = peliGuardada;
    }

    botonSeleccionar.forEach(boton => {
        boton.addEventListener('click', function() {
            const fila = this.closest('tr');
            const hora = fila.cells[0].innerText;
            const diaMarcado = fila.querySelector('input[type="radio"]:checked');
            const cantidad = fila.querySelector('.cantidad-entradas').value;

            if (diaMarcado) {
                const diaNombre = fila.querySelector(`label[for="${diaMarcado.id}"]`).innerText;

                // Guardamos los datos de la compra en localStorage
                localStorage.setItem('horaSeleccionada', hora);
                localStorage.setItem('diaSeleccionado', diaNombre);
                localStorage.setItem('cantidadEntradas', cantidad);

                // --- VALIDACIÓN DE SEGURIDAD ---
                const usuarioLogueado = sessionStorage.getItem('usuarioLogueado');

                if (usuarioLogueado === "true") {
                    // Si está logueado, va a confirmar
                    window.location.href = "confirmacion.html";
                } else {
                    // Si no, al registro
                    alert("Debes estar registrado para finalizar la compra.");
                    window.location.href = "registrarse.html";
                }
            } else {
                alert("Por favor, selecciona un día para tu función.");
            }
        });
    });
});