const botonCambiar = document.getElementById("botonCambiar");

botonCambiar.addEventListener("click", function () {
    // Genera un color aleatorio en formato hexadecimal
const colorAleatorio = '#' + Math.floor(Math.random()*16777215).toString(16);
    // Cambia el color de fondo del elemento
        document.body.style.backgroundColor = colorAleatorio;
});