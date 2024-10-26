window.addEventListener("DOMContentLoaded", function () {

    let numero = this.prompt("Introduce un numero:");
    let numero2 = this.prompt("Introduce otro numero:");

    if (isNaN(numero) || isNaN(numero2)) {
        this.alert("No has introducido un numero");
        return;
    } else {

        let operacion = prompt("Introduce una operacion (+ - * /): ");

        if (operacion == "+") {
            let suma = parseFloat(numero) + parseFloat(numero2);
            this.alert("La suma de los numero es: " + (suma));
        }
        else if (operacion == "-") {
            let resta = parseFloat(numero) - parseFloat(numero2);
            this.alert("La resta de los numero es: " + (resta));
        }
        else if (operacion == "*") {
            let multiplicacion = parseFloat(numero) * parseFloat(numero2);
            this.alert("La multiplicacion de los numero es: " + (multiplicacion));
        }
        else if (operacion == "/") {
            let division = parseFloat(numero) / parseFloat(numero2);
            this.alert("La division de los numero es: " + (division));
        }
        else {
            alert("Operacion no valida");
        }

    }

});

