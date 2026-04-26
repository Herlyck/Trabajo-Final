

document.addEventListener('DOMContentLoaded', function() {
    // --- LÓGICA DE LA IMAGEN (Lo que ya tenías) ---
    const rutasImagenes = {
        'mario': '../Imagenes/MarioGalaxy.png',
        'hoppers': '../Imagenes/hoppers.png',
        'findelmundo': '../Imagenes/fin del mundo.png',
        'nuremberg': '../Imagenes/nuremberg.png',
        'zonaderiesgo': '../Imagenes/zonaderiesgo.png',
        'scream': '../Imagenes/scream7.png',
        'bufon': '../Imagenes/bufon.png',
        'magokremlin': '../Imagenes/magokremlin.png',
        'momia': '../Imagenes/la posesion de la momia.png',
        'browns': '../Imagenes/todos quieren venir a brown.png',
        '911': '../Imagenes/911.png',
        'torrente': '../Imagenes/torrente presidente.png',
        'padrehermano': '../Imagenes/padrehermano.png',
        'cascada': '../Imagenes/la cascada de dios.png',
        'elmono': '../Imagenes/el mono.png',
        'buenasuerte': '../Imagenes/buenasuerte.png'
    };

    const peliGuardada = localStorage.getItem('peliNombre');
    const imagenHorario = document.getElementById('imagen-peli-horario');
    if (peliGuardada && rutasImagenes[peliGuardada]) {
        imagenHorario.src = rutasImagenes[peliGuardada];
    }

    // --- LÓGICA DE SELECCIÓN (Aquí está el arreglo) ---
    
    // 1. Usamos querySelectorAll para capturar TODOS los botones
    const botones = document.querySelectorAll('input[type="button"][value="Seleccionar"]');

    botones.forEach(boton => {
        boton.addEventListener('click', function() {
            // Buscamos la fila exacta (tr) donde se hizo clic
            const fila = this.closest('tr');
            
            // Capturamos la Hora
            const hora = fila.cells[0].innerText;

            // Capturamos el Día (buscamos el radio marcado en ESTA fila)
            const diaMarcado = fila.querySelector('input[name="pelicula"]:checked');
            
            // Capturamos la Cantidad (buscamos el select de ESTA fila)
            const cantidadSelect = fila.querySelector('.cantidad-entradas');
            const cantidad = cantidadSelect.value;

            if (diaMarcado) {
                // Buscamos el texto del label asociado al radio marcado
                const diaNombre = fila.querySelector(`label[for="${diaMarcado.id}"]`).innerText;

                // Guardamos todo en localStorage
                localStorage.setItem('horaSeleccionada', hora);
                localStorage.setItem('diaSeleccionado', diaNombre);
                localStorage.setItem('cantidadEntradas', cantidad);

                // Redirigimos a la confirmación
                window.location.href = "confirmacion.html";
            } else {
                alert("Por favor, selecciona un día (Lunes, Martes, etc.) antes de continuar.");
            }
        });
    });
});