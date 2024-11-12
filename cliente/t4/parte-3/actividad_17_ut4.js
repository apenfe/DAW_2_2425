window.addEventListener("DOMContentLoaded", () => {

    /*
    Realiza un programa que utilice una función llamada calcularIVA a la que se le
    pasarán dos parámetros: precio e IVA. La función deberá calcular el valor del
    IVA sobre el precio y devolver el resultado. 
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