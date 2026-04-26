
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

// 2. Cargar imagen dinámicamente
const urlParams = new URLSearchParams(window.location.search);
const peliSeleccionada = urlParams.get('peli');
const imagenElemento = document.getElementById('imagen-peli');

if (peliSeleccionada && rutasImagenes[peliSeleccionada]) {
    imagenElemento.src = rutasImagenes[peliSeleccionada];
    localStorage.setItem('peliNombre', peliSeleccionada);
}

// 3. Guardar SEDE al enviar formulario
const formularioSede = document.getElementById('formulario-2');

if (formularioSede) {
    formularioSede.addEventListener('submit', function() {
        const seleccionado = document.querySelector('input[name="cine"]:checked');
        if (seleccionado) {
            localStorage.setItem('sedeElegida', seleccionado.value);
        }
    });
}