window.addEventListener("DOMContentLoaded", () => {

    /*
    Programa en JavaScript un botón que cuente cuántas veces ha sido pulsado y
muestre el conteo en un elemento de texto
    */

    let contador = 0;
    let boton = document.getElementById("boton");
    let texto = document.getElementById("texto");

    boton.addEventListener("click", () => {
        contador++;
        texto.innerText = contador;
    });

});