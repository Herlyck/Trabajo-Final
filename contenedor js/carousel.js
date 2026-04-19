window.onload = () => {
    const track = document.querySelector('.carousel-track');
    const slides = document.querySelectorAll('.slide');
    let index = 0;

    if (slides.length > 0) {
        setInterval(() => {
            index++;
            
            if (index >= slides.length) {
                index = 0; // Vuelve al inicio
            }

            // Movemos la tira el equivalente a una imagen (100% del contenedor)
            track.style.transform = `translateX(-${index * 100}%)`;
        }, 4000);
    }
};