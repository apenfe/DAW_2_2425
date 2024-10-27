window.addEventListener("DOMContentLoaded", () => {

    // Implementa un script que pida una fecha y muestre cuál será la fecha pasada
    //70 días desde la fecha introducida
    let boton = document.getElementById("boton");
    let date = document.getElementById("date");
    let salida = document.getElementById("salida");

    boton.addEventListener("click", () => {

        if (date.value === "") {
            salida.textContent = "Por favor, introduce una fecha";
            return;
        } else {
            var fecha = new Date(date.value);
            var dias = 70; // Número de días a agregar
            fecha.setDate(fecha.getDate() + dias);
        }

        salida.textContent = "Fecha en 70 días: " + fecha.toISOString().slice(0, 10);

    });

});
