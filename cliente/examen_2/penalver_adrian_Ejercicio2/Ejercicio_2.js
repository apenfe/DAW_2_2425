document.addEventListener("DOMContentLoaded", () => {

    // se crea una funcion que quita los duplicados de un array y devuelve los elementos una unica vez
    function quitarDuplicados(array) {

        // se devuelve mediante filter todos los elementos que cumplen con la condicion...
        return array.filter((item, index) => array.indexOf(item) === index)

        // si se encuentra un elemento para el cual su indice es exactamente igual a al indice de su primera coincidencia en el array,
        // entonces se devuelve true y se guarda dicho elemento.
    }

    // se crea el array
    let array = [1, 2, 2, 3, 4, 4, 5];

    // se almacena el array resultado en salida
    let salida = quitarDuplicados(array);

    // se muestra la salida
    console.log(salida);

});