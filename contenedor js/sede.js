document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.getElementById('formulario-2');

    if (formulario) {
        formulario.addEventListener('submit', function() {
            // Buscamos el radio que el usuario marcó
            const sedeSeleccionada = document.querySelector('input[name="cine"]:checked');
            
            if (sedeSeleccionada) {
                // Buscamos el texto del <label> que está justo antes del radio
                const nombreSede = sedeSeleccionada.previousElementSibling.innerText;
                
                // Lo guardamos en el localStorage
                localStorage.setItem('ticket_sede', nombreSede);
            }
        });
    }
});