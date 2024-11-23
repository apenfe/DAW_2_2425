window.addEventListener("DOMContentLoaded", () => {

    let caja = document.getElementById("texto");

    caja.addEventListener("keydown", (event) => {

        // si la tecla es un número no dejar escribit
        if (event.key >= 0 && event.key <= 9) {
            event.preventDefault();
            alert("No se pueden introducir números");
            return;
        }

    });

});