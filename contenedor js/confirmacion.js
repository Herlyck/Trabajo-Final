// document.addEventListener('DOMContentLoaded', () => {
//     // 1. Recuperamos todos los datos (incluyendo la sede)
//     const sede = localStorage.getItem('ticket_sede');
//     const dia = localStorage.getItem('ticket_dia');
//     const hora = localStorage.getItem('ticket_hora');
//     const cant = localStorage.getItem('ticket_cantidad');

//     // 2. Referencias a los elementos del HTML
//     const mostrarSede = document.getElementById('mostrar-sede');
//     const mostrarDia = document.getElementById('mostrar-dia');
//     const mostrarHora = document.getElementById('mostrar-hora');
//     const mostrarCant = document.getElementById('mostrar-cantidad');

//     // 3. Inyectamos los datos en los spans si existen
//     if (sede && mostrarSede) mostrarSede.innerText = sede;
//     if (dia && mostrarDia) mostrarDia.innerText = dia;
//     if (hora && mostrarHora) mostrarHora.innerText = hora;
//     if (cant && mostrarCant) mostrarCant.innerText = cant;

//     // 4. Lógica del botón finalizar
//     const botonFinalizar = document.getElementById('boton-finalizar');
//     if (botonFinalizar) {
//         botonFinalizar.addEventListener('click', () => {
//             alert("¡Reserva confirmada! Disfruta la película.");
//             localStorage.clear();
//             window.location.href = "../index.html"; 
//         });
//     }
// });


document.addEventListener('DOMContentLoaded', function() {
    // 1. Extraer los datos de la memoria (localStorage)
    const sede = localStorage.getItem('sedeElegida');
    const peli = localStorage.getItem('peliNombre');
    const dia = localStorage.getItem('diaSeleccionado'); // Asegúrate de guardar esto en horario.js
    const hora = localStorage.getItem('horaSeleccionada'); // Asegúrate de guardar esto en horario.js
    const cantidad = localStorage.getItem('cantidadEntradas'); // Asegúrate de guardar esto en horario.js

    // 2. Referencias a los elementos del HTML
    const campoSede = document.getElementById('mostrar-sede');
    const campoDia = document.getElementById('mostrar-dia');
    const campoHora = document.getElementById('mostrar-hora');
    const campoCantidad = document.getElementById('mostrar-cantidad');

    // 3. Mostrar los datos en pantalla
    if (campoSede) campoSede.textContent = sede || "No seleccionada";
    if (campoDia) campoDia.textContent = dia || "No seleccionado";
    if (campoHora) campoHora.textContent = hora || "No seleccionada";
    if (campoCantidad) campoCantidad.textContent = cantidad || "0";

    // Opcional: Mostrar el nombre de la peli en el título
    const tituloTicket = document.querySelector('h1');
    if (peli) {
        tituloTicket.textContent = "Confirmación: " + peli.toUpperCase();
    }
});

// Botón finalizar (limpia la memoria)
const botonFinalizar = document.getElementById('boton-finalizar');
if (botonFinalizar) {
    botonFinalizar.addEventListener('click', function() {
        alert("¡Gracias por tu compra!");
        localStorage.clear(); // Limpia los datos para una nueva compra
        window.location.href = "../index.html";
    });
}













































