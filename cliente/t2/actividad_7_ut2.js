var num1 = prompt("Introduce un numero:");
let parrafo = document.getElementById("parrafo");

if (num1 % 2 == 0) {
    parrafo.innerHTML = "El numero " + num1 + " es par";
} else {
    parrafo.innerHTML = "El numero " + num1 + " es impar"; s
}

