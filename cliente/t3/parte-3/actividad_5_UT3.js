/*
Mostrar en la consola del navegador la URL completa, el hostname, el path, el
protocolo y el puerto de la URL generada al ejecutar el programa.
*/

window.addEventListener("DOMContentLoaded", () => {

    console.log("URL completa: " + window.location.href);
    console.log("Hostname: " + window.location.hostname);
    console.log("Path: " + window.location.pathname);
    console.log("Protocolo: " + window.location.protocol);
    console.log("Puerto: " + window.location.port);

});
