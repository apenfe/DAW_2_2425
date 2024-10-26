window.addEventListener("DOMContentLoaded", () => {

    /*
    Crear una página web con dos botones y la siguiente funcionalidad para cada
    uno de ellos:
        a. “Crear nueva ventana”: abre una ventana con la página de Google en
        su interior (título y dimensiones a elegir).
        b. “Cerrar nueva ventana”: cierra la ventana abierta.
    */

    let abrir = document.getElementById("abrir");
    let cerrar = document.getElementById("cerrar");

    let ventana = document.getElementById("ventana");

    abrir.addEventListener("click", () => {
        ventana = window.open("https://www.google.com", "PRUEBA", "width=800, height=550");
    });

    cerrar.addEventListener("click", () => {
        ventana.close();
    });

});
