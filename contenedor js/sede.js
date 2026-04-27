document.addEventListener('DOMContentLoaded', function() {
    // 1. DICCIONARIO DE IMÁGENES (Asegúrate de que las rutas sean correctas)
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
        // Agrega aquí las que falten siguiendo el mismo formato
    };

    // 2. CAPTURAR LA PELÍCULA DE LA URL
    // Ejemplo: mariocompra.html?peli=mario
    const parametros = new URLSearchParams(window.location.search);
    const peliSeleccionada = parametros.get('peli');

    const imagenElemento = document.getElementById('imagen-peli');

    if (peliSeleccionada && rutasImagenes[peliSeleccionada]) {
        const rutaFinal = rutasImagenes[peliSeleccionada];
        
        if (imagenElemento) {
            imagenElemento.src = rutaFinal;
            // Guardamos la ruta para usarla después en Horarios
            localStorage.setItem('peliSeleccionada', rutaFinal);
        }
    } else {
        console.error("No se encontró la película en la URL o en el diccionario.");
    }

    // 3. LÓGICA DE LA SEDE (Lo que ya teníamos)
    const formularioSede = document.getElementById('formulario-2');
    if (formularioSede) {
        formularioSede.addEventListener('submit', function(event) {
            const sedeSeleccionada = document.querySelector('input[name="cine"]:checked');
            if (sedeSeleccionada) {
                localStorage.setItem('sedeSeleccionada', sedeSeleccionada.value);
            }
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const formularioSede = document.getElementById('formulario-2');

    if (formularioSede) {
        formularioSede.addEventListener('submit', function(event) {
            // Buscamos cuál de los botones radio con name="cine" está marcado
            const sedeSeleccionada = document.querySelector('input[name="cine"]:checked');

            if (sedeSeleccionada) {
                // Guardamos el valor (ej: "Abasto") en el localStorage
                localStorage.setItem('sedeSeleccionada', sedeSeleccionada.value);
                console.log("Sede guardada: " + sedeSeleccionada.value);
            } else {
                // Evitamos que pase si no eligió nada (aunque el 'required' del HTML debería bastar)
                event.preventDefault();
                alert("Por favor, selecciona una sede.");
            }
        });
    }
});