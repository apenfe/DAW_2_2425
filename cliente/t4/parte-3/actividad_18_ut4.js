class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    toJson() {
        return {
            nombre: this.nombre,
            edad: this.edad
        };
    }
}

window.addEventListener("DOMContentLoaded", () => {

    let array = [];

    /*
        Implementa un JavaScript que use una función llamada ordenarArrayObjetos
        que reciba un array de objetos y una cadena que represente el nombre de una
        propiedad de los objetos. La función deberá ordenar el array de objetos de
        acuerdo con los valores de la propiedad especificada en un prompt, en orden
        ascendente. Además, se mostrará por consola el resultado del ordenado.
    */

    let crear = document.getElementById("crear");

    crear.addEventListener("click", () => {
        let nombre = document.getElementById("nombre").value;
        let edad = parseInt(document.getElementById("edad").value, 10);
        array.push(new Persona(nombre, edad).toJson());

        document.getElementById("nombre").value = "";
        document.getElementById("edad").value = "";
    });

    let ordenar = document.getElementById("ordenar");

    ordenar.addEventListener("click", () => {
        let propiedad = document.getElementById("propiedad").value;

        ordenarArrayObjetos(array, propiedad);

        let lista = document.getElementById("lista");
        lista.innerHTML = "";

        for (let i = 0; i < array.length; i++) {
            let li = document.createElement("li");
            li.textContent = `Nombre: ${array[i].nombre} - Edad: ${array[i].edad}`;
            lista.appendChild(li);
        }

        document.getElementById("propiedad").value = "";
    });

    const ordenarArrayObjetos = (array, propiedad) => {
        array.sort((a, b) => {
            if (typeof a[propiedad] === "string") {
                return a[propiedad].localeCompare(b[propiedad]);
            }
            return a[propiedad] - b[propiedad];
        });
    };

});