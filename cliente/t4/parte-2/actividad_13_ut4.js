class Cuenta {
    constructor(nombre, apellido, saldo) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.saldo = saldo;
    }

    mostrarDatos() {
        alert(`Datos de la cuenta:\nNombre: ${this.nombre}\nApellido: ${this.apellido}\nSaldo: ${this.saldo}€`);
    }
}

function crearCuenta() {
    const nombre = prompt("Introduce el nombre:");
    if (!nombre) return;

    const apellido = prompt("Introduce el apellido:");
    if (!apellido) return;

    const saldo = parseFloat(prompt("Introduce el saldo:"));
    if (isNaN(saldo)) {
        alert("El saldo debe ser un número válido");
        return;
    }

    let cta = new Cuenta(nombre, apellido, saldo);
    cta.mostrarDatos();
}
