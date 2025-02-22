window.addEventListener("DOMContentLoaded", () => {

    /*
    Programa un JavaScript que sobre una caja de texto bloquee la entrada de ciertas
teclas específicas (por ejemplo, las teclas de función F1-F12). Muestra un mensaje
de alerta si el usuario intenta usar una de estas teclas. Utiliza el evento keydown
    */

    const input = document.getElementById("texto");

    input.addEventListener("keydown", (e) => {
        if (e.key.includes("F")) {
            e.preventDefault();
            alert("No se permiten teclas de función");
        }
    });

});