window.addEventListener("DOMContentLoaded", () => {

    /*
    Visualiza en el documento del navegador, las siguientes características de la
    pantalla.
    */

    let alto = document.getElementById("alto");
    let ancho = document.getElementById("ancho");
    let altoDisponible = document.getElementById("altoDisponible");
    let anchoDisponible = document.getElementById("anchoDisponible");
    let profundidadColor = document.getElementById("profundidadColor");
    let profundadidadPixel = document.getElementById("profundidadPixel");

    alto.textContent += window.screen.height;
    ancho.textContent += window.screen.width;
    altoDisponible.textContent += window.screen.availHeight;
    anchoDisponible.textContent += window.screen.availWidth;
    profundidadColor.textContent += window.screen.colorDepth;
    profundadidadPixel.textContent += window.screen.pixelDepth;

});
