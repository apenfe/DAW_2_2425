document.addEventListener('DOMContentLoaded', function () {

    class Estudiante {
        constructor(nombre) {
            this.nombre = nombre;
            this.notas = [];
        }

        agregarNota(nota) {
            if (nota >= 0 && nota <= 10) {
                this.notas.push(nota);
            }
        }

        calcularPromedio() {
            if (this.notas.length === 0) return 0;
            let suma = this.notas.reduce((a, b) => a + b, 0);
            return suma / this.notas.length;
        }
    }

    let estudiante = new Estudiante("Ana");
    estudiante.agregarNota(8);
    estudiante.agregarNota(9);
    estudiante.agregarNota(7);
    console.log(`El promedio de ${estudiante.nombre} es ${estudiante.calcularPromedio()}`);

});