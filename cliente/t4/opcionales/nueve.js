document.addEventListener('DOMContentLoaded', function () {

    class Empleado {
        constructor(nombre, salario) {
            this.nombre = nombre;
            this.salario = salario;
        }

        aumentarSalario(porcentaje) {
            if (porcentaje > 0) {
                this.salario += this.salario * (porcentaje / 100);
            }
        }
    }

    let empleado = new Empleado("Juan", 3000);
    empleado.aumentarSalario(10);
    console.log(`El nuevo salario de ${empleado.nombre} es ${empleado.salario}`);

});