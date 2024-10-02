window.addEventListener("DOMContentLoaded", function () {

    let year = prompt("Introduce un año: ");
    let mes = prompt("Introduce un mes: ");
    let dia = prompt("Introduce un dia: ");

    let bisiesto = year % 4 == 0 && (year % 100 != 0 || year % 400 == 0);
    let valido = true;

    if (bisiesto) {
        if (mes < 1 || mes > 12) {
            console.log("El mes " + mes + " no es válido");
            valido = false;
        }
        if (dia < 1 || dia > 31) {
            console.log("El dia " + dia + " no es válido");
            valido = false;
        }
        if (mes == 2 && dia > 29) {
            console.log("El mes " + mes + " no puede tener más de 29 días");
            valido = false;
        }
    } else {
        if (mes < 1 || mes > 12) {
            console.log("El mes " + mes + " no es válido");
            valido = false;
        }
        if (dia < 1 || dia > 31) {
            console.log("El dia " + dia + " no es válido");
            valido = false;
        }
        if (mes == 2 && dia > 28) {
            console.log("El mes " + mes + " no puede tener más de 28 días");
            valido = false;
        }
    }

    this.alert(valido ? "Fecha válida" : "Fecha no válida");

});

