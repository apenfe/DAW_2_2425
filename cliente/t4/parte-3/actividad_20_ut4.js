/*
    Realiza un programa en JavaScript que cree una clase llamada Animal con las
    propiedades nombre y edad; y un método llamado comer() que visualice por
    consola “El animal está comiendo”. A continuación, crea una clase hija llamada
    Gato que herede de la clase Animal y añade una propiedad adicional raza y un
    método llamado maullar() que visualice por consola “miau”.
    Crear una instancia de la clase Gato, establecer un nombre, edad y raza; y
    llamar   a   los   métodos   comer()   y   maullar()   para   comprobar   que   funcionan
    correctamente y visualiza también la consulta de sus propiedades
*/

class Animal {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    comer() {
        console.log("El animal está comiendo");
    }
}

class Gato extends Animal {
    constructor(nombre, edad, raza) {
        super(nombre, edad);
        this.raza = raza;
    }

    maullar() {
        console.log("miau");
    }
}

let gato = new Gato("Tom", 3, "Siames");
gato.comer();
gato.maullar();
console.log(gato.nombre);
console.log(gato.edad);
console.log(gato.raza);




