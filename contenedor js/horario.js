document.addEventListener('DOMContentLoaded', () => {
    const botones = document.querySelectorAll('input[type="button"][value="Seleccionar"]');

    botones.forEach(boton => {
        boton.addEventListener('click', function() {
            const fila = this.closest('tr');
            const horario = fila.cells[0].innerText;
            const radioSeleccionado = fila.querySelector('input[type="radio"]:checked');
            const selectCant = fila.querySelector('select');

            if (!radioSeleccionado) {
                alert("Por favor, selecciona un día antes de continuar.");
                return;
            }

            // Capturamos el texto del label que está justo ANTES del radio seleccionado
            const diaTexto = radioSeleccionado.previousElementSibling.innerText;

            // Guardamos en la memoria del navegador
            localStorage.setItem('ticket_dia', diaTexto);
            localStorage.setItem('ticket_hora', horario);
            localStorage.setItem('ticket_cantidad', selectCant.value);

            // Redirigimos a la página de confirmación
            window.location.href = "confirmacion.html";
        });
    });
});