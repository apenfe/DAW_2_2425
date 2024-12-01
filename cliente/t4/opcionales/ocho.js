class Cuenta {

    constructor(titular) {
        this.titular = titular;
        this.saldo = 0;
    }

    ingresar(dinero) {
        if (dinero > 0) {
            this.saldo += dinero;
        }
    }

    retirar(dinero) {
        if (dinero <= this.saldo) {
            this.saldo -= dinero;
        }
    }

}

document.addEventListener('DOMContentLoaded', function () {

    /*
    CuentaBancaria con   propieda-
des titular y saldo, y métodos depositar() y retirar(). Crea un ejemplo de funcio-
namiento.
1

    */

    let cuenta = new Cuenta("yo");

    cuenta.ingresar(2000);

    cuenta.retirar(1500);

});