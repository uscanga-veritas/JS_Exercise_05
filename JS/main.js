var imagenes = document.querySelectorAll(".imagen");
var segundos = 0;
var repeticiones = 0;
var intervalo;

function cambiarImagen() {
    switch (segundos) {
        case 0:
        case 6:
            imagenes[0].style.display = "block"; // Apagar verde
            imagenes[1].style.display = "none"; // Encender gris
            imagenes[2].style.display = "none"; // Encender gris
            break;
        case 2:
        case 8:
            imagenes[0].style.display = "none"; // Apagar verde
            imagenes[1].style.display = "block"; // Encender gris
            imagenes[2].style.display = "none"; // Encender gris
            break;
        case 4:
        case 10:
            imagenes[0].style.display = "none"; // Apagar verde
            imagenes[1].style.display = "none"; // Encender gris
            imagenes[2].style.display = "block"; // Encender gris
            break;
        case 12:
            repeticiones++;
            if (repeticiones === 10) {
                clearInterval(intervalo); // Detener después de 60 segundos
            }
            segundos = -2; // Reiniciar a -2 para compensar el aumento en el bucle
            break;
    }
    segundos += 2;
}

// Cambiar la imagen automáticamente cada 2 segundos
intervalo = setInterval(cambiarImagen, 2000);