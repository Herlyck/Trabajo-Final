document.addEventListener('DOMContentLoaded', () => {
    // 1. Recuperamos todos los datos (incluyendo la sede)
    const sede = localStorage.getItem('ticket_sede');
    const dia = localStorage.getItem('ticket_dia');
    const hora = localStorage.getItem('ticket_hora');
    const cant = localStorage.getItem('ticket_cantidad');

    // 2. Referencias a los elementos del HTML
    const mostrarSede = document.getElementById('mostrar-sede');
    const mostrarDia = document.getElementById('mostrar-dia');
    const mostrarHora = document.getElementById('mostrar-hora');
    const mostrarCant = document.getElementById('mostrar-cantidad');

    // 3. Inyectamos los datos en los spans si existen
    if (sede && mostrarSede) mostrarSede.innerText = sede;
    if (dia && mostrarDia) mostrarDia.innerText = dia;
    if (hora && mostrarHora) mostrarHora.innerText = hora;
    if (cant && mostrarCant) mostrarCant.innerText = cant;

    // 4. Lógica del botón finalizar
    const botonFinalizar = document.getElementById('boton-finalizar');
    if (botonFinalizar) {
        botonFinalizar.addEventListener('click', () => {
            alert("¡Reserva confirmada! Disfruta la película.");
            localStorage.clear();
            window.location.href = "../index.html"; 
        });
    }
});














































