class Coche {
    constructor(marca, combustible) {
        this.marca = marca;
        this.combustible = combustible;
        this.litros = 0;
    }

    repostarLitros(cantidad) {
        if (cantidad > 0) {
            this.litros += cantidad;
            return true;
        }
        return false;
    }

    consumirLitros(cantidad) {
        if (cantidad > 0 && this.litros >= cantidad) {
            this.litros -= cantidad;
            return true;
        }
        return false;
    }

    obtenerInfo() {
        return `Marca: ${this.marca}\nTipo de combustible: ${this.combustible}\nLitros actuales: ${this.litros}`;
    }
}

let coche = null;

function crearCoche() {
    const marca = document.getElementById('marca').value.trim();
    const combustible = document.getElementById('combustible').value.trim();

    if (!marca || !combustible) {
        alert('Por favor, rellena todos los campos');
        return;
    }

    coche = new Coche(marca, combustible);
    document.getElementById('info').textContent = 'Coche creado correctamente';
}

function repostar() {
    if (!coche) {
        alert('Primero debes crear un coche');
        return;
    }

    const litros = parseFloat(document.getElementById('litros').value);
    if (isNaN(litros) || litros <= 0) {
        alert('Introduce una cantidad válida de litros');
        return;
    }

    if (coche.repostarLitros(litros)) {
        document.getElementById('info').textContent = `Se han repostado ${litros} litros`;
    } else {
        document.getElementById('info').textContent = 'Error al repostar';
    }
}

function consumir() {
    if (!coche) {
        alert('Primero debes crear un coche');
        return;
    }

    const litros = parseFloat(document.getElementById('litros').value);
    if (isNaN(litros) || litros <= 0) {
        alert('Introduce una cantidad válida de litros');
        return;
    }

    if (coche.consumirLitros(litros)) {
        document.getElementById('info').textContent = `Se han consumido ${litros} litros`;
    } else {
        document.getElementById('info').textContent = 'No hay suficientes litros para consumir';
    }
}

function mostrarInfo() {
    if (!coche) {
        alert('Primero debes crear un coche');
        return;
    }

    document.getElementById('info').textContent = coche.obtenerInfo();
}
