// se realiza la importación de la clase desde su fichero en el proyecto
import Estructura from "./Estructura.js";

// se crea una instancia de la clase Estructura
let lista = new Estructura();

// se usan los metodos de la clase con difernetes combinaciones para ver su uso
console.log(lista.visualizarTope()); // undefined
lista.introducir("hola");
console.log(lista.visualizarTope()); // hola
lista.introducir("adios");
console.log("El ultimo elemento ha sido extraido y es: " + lista.extraer()); //hola