/*
Visualiza en la página web del navegador, la cadena del UserAgent y a 
continuación, cuando se pulse el botón “Obtener navegador”, extractando la 
información de esa cadena, mostrar el nombre del navegador y su versión.

Observación: el código deberá estar adaptado para los navegadores Edge, 
Firefox y Chrome. Para obtener la cadena del UserAgent se utilizará la 
propiedad userAgent del objeto navigator.
*/

window.addEventListener("DOMContentLoaded", () => {

    let boton = document.getElementById("boton");
    let navegador = document.getElementById("navegador");
    let useragent = document.getElementById("useragent");

    boton.addEventListener("click", () => {

        useragent.innerHTML = navigator.userAgent;

        let nav = navigator.userAgent.split(" ");

        navegador.innerHTML = "Navegador: " + nav[nav.length - 2] + " " + nav[nav.length - 1];

    });

});
