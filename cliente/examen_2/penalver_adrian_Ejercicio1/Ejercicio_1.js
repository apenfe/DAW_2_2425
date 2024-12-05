document.addEventListener("DOMContentLoaded", () => {

    // creo un array de personas, compuesto por objetos
    let objetoPersonas = [
        { nombre: 'marcos', saldo: 20 },
        { nombre: 'laura', saldo: 18 },
        { nombre: 'adolfo', saldo: 35 },
        { nombre: 'cesar', saldo: 19 },
    ];

    // ordenar por propiedad en orden descendente
    function ordenarArrayObjetos(arrayObjetos, propiedadOrden) {

        // hago una copia del array para evitar errores
        // para ello hago una desestructuracion del array y lo inserto en otro
        let copiaArray = arrayObjetos.map(obj => ({ ...obj }));

        // compruebo si la propiedad es nombre
        if (propiedadOrden === "nombre") {
            return copiaArray.sort((a, b) => {
                // ordeno el array de objetos por el nombre de forma descendente

                // compruebo primero si el segundo es menor que el primero y en ese caso deveulvo 1
                if (b[propiedadOrden].toLowerCase() < a[propiedadOrden].toLowerCase()) {
                    return 1;
                }

                // compruebo primero si el segundo es mayor que el primero y en ese caso deveulvo -1
                if (b[propiedadOrden].toLowerCase() > a[propiedadOrden].toLowerCase()) {
                    return -1;
                }

                // si son iguales devuelvo 0
                return 0;
            });

            // compruebo si la propiedad es saldo
        } else if (propiedadOrden === "saldo") {

            return copiaArray.sort((a, b) => {
                // ordeno el array de objetos por el saldo de forma descendente
                return b[propiedadOrden] - a[propiedadOrden];
            });

            // en caso de no ser ninguna de las propiedades
        } else {
            return "No se ha especificado una propiedad correcta";
        }

    }

    // hago pruebas de las tres posibilidades
    console.log('Ordeno por nombre:');
    console.log(ordenarArrayObjetos(objetoPersonas, "nombre"));
    console.log('Ordeno por saldo:');
    console.log(ordenarArrayObjetos(objetoPersonas, "saldo"));
    console.log('Valor invalido:');
    console.log(ordenarArrayObjetos(objetoPersonas, "algo"));

    // se pide al usuario que inserte el campo por el cual desea ordenar
    console.log('Valor introducido por prompt:');
    let atributo = prompt("Inserte el atributo por el cual se desea ordenar: ");

    // se muestra el array ordenado segun el campo especificado por prompt
    console.log(ordenarArrayObjetos(objetoPersonas, atributo));

});