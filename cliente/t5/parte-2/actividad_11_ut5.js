document.addEventListener("DOMContentLoaded", () => {

    /*
    Crear una página que tenga un campo de entrada. Cuando el usuario pase el ratón
por encima, el texto introducido pasará a mayúsculas, y cuando salga el ratón,
volverá a minúsculas. Utilizar eventos mouseover y mouseout
    */

    let texto = document.getElementById('texto');

    texto.addEventListener("mouseover", () => {
        texto.value = texto.value.toUpperCase();
    });

    texto.addEventListener("mouseout", () => {
        texto.value = texto.value.toLowerCase();
    });

});


