var num1 = prompt("Introduce un numero:");
let parrafo = document.getElementById("parrafo");

let factorial = 1;
for (let i = 1; i <= num1; i++) {
    factorial *= i;
}

parrafo.innerHTML = "El factorial de " + num1 + " es " + factorial;

