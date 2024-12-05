class Estructura {

    // se crea un atributo publico array
    array;

    // se usa un constructor y se inicia como vacio
    constructor() {
        this.array = [];
    }

    // metodo que introduce un elemento en la primera posicion del array
    introducir(elemento) {
        this.array.unshift(elemento);
    }

    // metodo que elimina el ultimo elemento del array y tambien lo devielve por si necesitamos mostrarlo
    extraer() {
        return this.array.pop();
    }

    // metodo para mostrar el ultimo elemento del array
    visualizarTope() {
        return this.array.at(-1);
    }

}

// se exporta toda la clase para poder ser utilizada en otros ficheros del proyecto
export default Estructura;



