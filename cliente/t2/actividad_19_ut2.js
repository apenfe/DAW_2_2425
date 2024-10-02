window.addEventListener("DOMContentLoaded", function () {

    let notas = [];

    while (notas.length < 5) {

        let nota = prompt("Introduce una nota: ");
        notas.push(parseFloat(nota));

        if (isNaN(nota)) {
            alert("No has introducido un numero");
            notas.pop();
        }

    }

    let suma = 0;
    for (let i = 0; i < notas.length; i++) {
        suma += notas[i];
    }

    let media = suma / notas.length;
    alert("La media de las notas es: " + media);

    if (media >= 5) {
        alert("Aprobado");
    } else {
        alert("Suspenso");
    }

});

