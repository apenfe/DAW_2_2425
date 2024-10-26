window.addEventListener("DOMContentLoaded", () => {

    /*
    Programar una página web que a través de un botón, abra una ventana hija y
    desde la hija pueda pasar información a la ventana padre. También debe existir
    la posibilidad de cerrar la ventana hija mediante otro botón. Ejecutar la página
    desde un servidor.
    */

    let abrir = document.getElementById("abrir");
    let cerrar = document.getElementById("cerrar");
    let texto = document.getElementById("texto");

    let ventanaHija;

    abrir.addEventListener("click", () => {
        ventanaHija = window.open("actividad_13_UT3_subventana.html", "Hija", "width=400, height=400");
    });

    cerrar.addEventListener("click", () => {
        ventanaHija.close();
    });

    window.addEventListener("message", (event) => {
        if (event.origin !== window.location.origin) {
            return; // Ignorar mensajes de orígenes no confiables
        }
        console.log('Mensaje recibido de la subventana:', event.data);
        texto.textContent = event.data;

    });

});
