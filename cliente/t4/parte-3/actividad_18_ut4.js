window.addEventListener("DOMContentLoaded", () => {

    /*
        Implementa un JavaScript que use una función llamada ordenarArrayObjetos
        que reciba un array de objetos y una cadena que represente el nombre de una
        propiedad de los objetos. La función deberá ordenar el array de objetos de
        acuerdo con los valores de la propiedad especificada en un prompt, en orden
        ascendente. Además, se mostrará por consola el resultado del ordenado.
    */

    const calcularIVA = (precio, IVA) => {
        return precio * IVA / 100;
    }

    let resultado = document.getElementById("resultado");

    let boton = document.getElementById("calcular");

    boton.addEventListener("click", () => {
        let precio = document.getElementById("precio").value;
        let iva = document.getElementById("iva").value;
        resultado.innerHTML = `El IVA es de ${calcularIVA(precio, iva)}€`;
    });

});