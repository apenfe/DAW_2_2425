/*
Mostrar en la consola del navegador la URL completa, el hostname, el path, el
protocolo y el puerto de la URL generada al ejecutar el programa.
*/

window.addEventListener("DOMContentLoaded", () => {

    let input1 = document.getElementById("input1");
    let input2 = document.getElementById("input2");

    let campo = document.getElementById("campo");

    input1.addEventListener("focus", () => {
        campo.innerHTML = 'Input 1';
    });

    input2.addEventListener("focus", () => {
        campo.innerHTML = 'Input 2';
    });

});
