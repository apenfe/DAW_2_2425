document.addEventListener("DOMContentLoaded", () => {

    // funcion que se encarga de obetenr las diferentes combinaciones de sumas de dos arrays
    function combinacionesDeSumas(array1, array2) {

        // se crea un array vacio
        let salida = [];

        // se recorren los numeros del primer array
        for (numero in array1) {

            // por cada numero del primer array se recorren todos los del segundo
            for (numero2 in array2) {

                // se almacena la suma del primero y el segundo en el array de salida
                salida.push(array1[numero] + array2[numero2]);
            }
        }

        // se devuelve la solucion
        return salida;
    }

    // se crean los dos arrays de prueba
    let array1 = [1, 2];
    let array2 = [3, 4];

    // se almacena el array resultado
    let resultado = combinacionesDeSumas(array1, array2);

    // se muestra el resultado por consola
    console.log(resultado);

});