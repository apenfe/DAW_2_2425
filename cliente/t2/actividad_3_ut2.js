let temperatura = prompt("Introduce la temperatura en grados Celsius", 0);

let fahrenheit = temperatura * 9 / 5 + 32;

let div = document.getElementById("grados");
div.innerHTML = "La temperatura en grados Fahrenheit es: " + fahrenheit.toFixed(2);
