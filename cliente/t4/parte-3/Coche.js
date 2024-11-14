export default class Coche {

    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
        this.arrancado = false;
    }

    arrancar() {
        if (this.arrancado) {
            console.log(`El coche de marca ${this.marca} y modelo ${this.modelo} ya está arrancado`);
        } else {
            console.log(`El coche de marca ${this.marca} y modelo ${this.modelo} ha arrancado`);
            this.arrancado = true;
        }
    }

    parar() {
        if (this.arrancado) {
            console.log(`El coche de marca ${this.marca} y modelo ${this.modelo} ha parado`);
            this.arrancado = false;
        } else {
            console.log(`El coche de marca ${this.marca} y modelo ${this.modelo} ya está parado`);
        }
    }
}