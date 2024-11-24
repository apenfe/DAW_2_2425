window.addEventListener("DOMContentLoaded", () => {

    /*
    Diseña un menú desplegable que habilite o deshabilite un botón según la opción
seleccionada. Utiliza el evento change.
    */

    let select = document.getElementById("select");
    let boton = document.getElementById("boton");

    select.addEventListener("change", () => {
        if (select.value == "1") {
            boton.disabled = false;
        } else {
            boton.disabled = true;
        }
    });

});