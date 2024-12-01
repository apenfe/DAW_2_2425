class Rectangulo {

    constructor(ancho, alto) {
        this.alto = alto;
        this.ancho = ancho;
    }

    area() {
        return this.alto * this.ancho;
    }

}

document.addEventListener('DOMContentLoaded', function () {

    /*
    una clase Rectangulo con propiedades alto y an-
cho, y un método calcularArea() que devuelva el área. Crea un ejemplo de fun-
cionamiento
    */

    let rectangulo = new Rectangulo(23, 43);

    console.log("El area es: " + rectangulo.area());

});