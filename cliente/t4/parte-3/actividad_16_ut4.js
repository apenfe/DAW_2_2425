class Persona {

    constructor(nombre, apellido, estudios = null) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.estudios = estudios;
    }

    asignarEstudios() {
        if (this.estudios == "0") {
            this.estudios = "Web";
        } else if (this.estudios == "1") {
            this.estudios = "Sistemas";
        } else {
            this.estudios = "Sin estudios";
        }

        return this.estudios;
    }

}

window.addEventListener("DOMContentLoaded", () => {

    /*
    Implementa un JavaScript que cree un array de objetos y los muestre en una
    tabla. Los objetos tendrán un nombre, un apellido y unos estudios. Los estudios
    pueden ser: Web con código 0, ó Sistemas con código 1. No es obligatorio
    determinar los estudios. Cuando esté completada la información y se pulse
    sobre el botón “Carga”, se crea un objeto y se añade al array. Se mostrarán los
    objetos almacenados en el array cuando se pulsa sobre el botón “Muestra”. El
    array se inicializará cuando se pulse el botón “Inicializa”
    */

    let objetos = [];

    document.getElementById("creaObjeto").addEventListener("click", () => {

        let nombre = document.getElementById("nombre").value;
        let apellido = document.getElementById("apellidos").value;
        let estudios = document.getElementById("estudios").value;

        let obj = new Persona(nombre, apellido, estudios);
        objetos.push(obj);

        document.getElementById("nombre").value = "";
        document.getElementById("apellidos").value = "";
        document.getElementById("estudios").value = "";

    });

    document.getElementById("muestraObjeto").addEventListener("click", () => {

        let tabla = document.getElementById("tabla");
        let body = tabla.getElementsByTagName("tbody")[0];

        for (let i = 0; i < objetos.length; i++) {
            let tr = document.createElement("tr");

            let tdNombre = document.createElement("td");
            tdNombre.textContent = objetos[i].nombre;
            tr.appendChild(tdNombre);

            let tdApellido = document.createElement("td");
            tdApellido.textContent = objetos[i].apellido;
            tr.appendChild(tdApellido);

            let tdEstudios = document.createElement("td");
            tdEstudios.textContent = objetos[i].asignarEstudios();
            tr.appendChild(tdEstudios);

            body.appendChild(tr);
        }

    });

    document.getElementById("inicializa").addEventListener("click", () => {
        objetos = [];
        document.getElementById("tabla").getElementsByTagName("tbody")[0].innerHTML = "";
    });

});