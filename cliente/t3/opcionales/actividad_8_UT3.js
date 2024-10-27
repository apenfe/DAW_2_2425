window.addEventListener("DOMContentLoaded", () => {

    let date = new Date();

    let dia = date.getDate();
    let mes = date.getMonth() + 1;
    let anio = date.getFullYear();

    if (dia < 10) {
        dia = "0" + dia;
    }

    if (mes < 10) {
        mes = "0" + mes;
    }

    let salida = document.getElementById("salida");
    salida.textContent = "Hoy es " + dia + " de " + mes + " de " + anio;

});
