window.addEventListener("DOMContentLoaded", function () {

    let numero = this.prompt("Introduce un numero:");
    let numero2 = this.prompt("Introduce otro nmero:");

    if (isNaN(numero) || isNaN(numero2)) {
        this.alert("No has introducido un numero");
        return;
    } else {
        let suma = parseFloat(numero) + parseFloat(numero2);
        this.alert("La suma de los numero es: " + (suma));
    }

});

