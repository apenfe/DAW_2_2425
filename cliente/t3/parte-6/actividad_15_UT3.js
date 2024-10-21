window.addEventListener("DOMContentLoaded", () => {

    let num1 = parseInt(Math.random(0, 99) * 100);
    let num2 = parseInt(Math.random(0, 99) * 100);
    let time = 0;
    let input = document.getElementById("num1");
    let resul = document.getElementById("resultado");
    let tiempo = document.getElementById("tiempo");
    let sum = document.getElementById("suma");

    sum.innerHTML = num1 + " + " + num2 + " = ";

    let intervalo = setInterval(() => {
        time += 10;
    }, 10);

    let btn = document.getElementById("comprobar");

    btn.addEventListener("click", () => {

        if (input.value === "" || isNaN(input.value)) {
            alert("Introduce un número");
            resul.innerHTML = "Fallo, vuelva a intentarlo";
            return;
        } else {
            if (input.value == num1 + num2) {
                resul.innerHTML = "Correcto";
                alert("Correcto");
                clearInterval(intervalo);
                tiempo.innerHTML = "Tiempo: " + time + " ms";
            }
        }
    });

});
