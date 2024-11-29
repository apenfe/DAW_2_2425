document.addEventListener('DOMContentLoaded', function () {

    /*
    Implementa un JavaScript que cree una función flecha que reciba un array de
    números y devuelva un nuevo array con los números multiplicados por 2.
    */

    const multiplicaPorDos = (numeros) => numeros.map(numero => numero * 2);

    const array = [1, 2, 3, 4];
    const newArray = multiplicaPorDos(array);
    console.log(newArray);

});