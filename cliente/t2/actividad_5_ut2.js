var edad = prompt("Introduce tu edad:");

if (edad == 0) {
    alert("es una edad bebe");
} else if (edad > 0 || edad < 120) {
    alert("llegare a esa edad");
} else {
    alert("no es una edad valida");
}