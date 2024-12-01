document.addEventListener('DOMContentLoaded', function () {

    /*
    función   flecha   que   reciba   un   array   de
    strings y devuelva un nuevo array con los strings en orden alfabético.
    */

    let palabras = ['varios', 'antes', 'zacarias'];



    const ordenar = (a, b) => {

        a = a.toLowerCase();
        b = b.toLowerCase();

        if (a > b) {
            return 1;
        } else if (a < b) {
            return -1;
        } else {
            return 0;
        }
    }

    palabras.sort(ordenar);

    console.log(palabras)

});