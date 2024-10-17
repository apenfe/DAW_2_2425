/*
Crear un botón con el texto “Cargar página de google”, de forma que al hacer
click sobre él, cargue la página www.google.com. Realiza esta actividad de
manera que contemple tres formas distintas de cargar la página de google.
*/

window.addEventListener("DOMContentLoaded", () => {

    let btn1 = document.getElementById("btn1");
    let btn2 = document.getElementById("btn2");
    let btn3 = document.getElementById("btn3");
    let frame = document.getElementById("frame");

    btn1.addEventListener("click", () => {
        window.location.href = "https://www.google.com";
    });

    btn2.addEventListener("click", () => {
        window.open("https://www.google.com");
    });

    btn3.addEventListener("click", () => {
        let iframe = document.createElement("iframe");

        iframe.src = "https://www.apenfe.es";
        iframe.style.width = "100%";
        iframe.style.height = "90vh";

        frame.appendChild(iframe);
    });

});
