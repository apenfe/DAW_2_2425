document.addEventListener('DOMContentLoaded', function () {

    //Implementa un JavaScript que sume todos los elementos de un array. Utiliza mé-
    // todos del objeto array
    const array = [1, 2, 3, 4, 5];
    const sum = array.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
    console.log(sum);

});