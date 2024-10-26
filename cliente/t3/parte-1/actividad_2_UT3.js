/*
Escribe un programa que establezca un cronómetro con hora, minutos, 
segundos y milisegundos, con la siguiente funcionalidad determinada por los 
botones descritos a continuación:
a. Arrancar: pone el cronómetro en marcha.
b. Parar: detiene el cronómetro.
c. Continuar: continúa con el funcionamiento del cronómetro.
d. Reiniciar: resetea el cronómetro a 0.
*/

window.addEventListener("DOMContentLoaded", () => {

    let time = document.getElementById("hora");
    let start = document.getElementById("arrancar");
    let stop = document.getElementById("parar");
    let continueBtn = document.getElementById("continuar");
    let reset = document.getElementById("reiniciar");

    stop.disabled = true;
    continueBtn.disabled = true;
    reset.disabled = true;

    let horas = 0;
    let minutos = 0;
    let segundos = 0;
    let milisegundos = 0;

    start.addEventListener("click", () => {

        reset.disabled = true;
        continueBtn.disabled = true;
        start.disabled = true;
        stop.disabled = false;

        let interval = setInterval(countTime, 10);

        stop.addEventListener("click", () => {

            clearInterval(interval);

            reset.disabled = false;
            continueBtn.disabled = false;
            start.disabled = true;
            stop.disabled = true;

        });

        reset.addEventListener("click", () => {

            stop.disabled = true;
            continueBtn.disabled = true;
            reset.disabled = true;
            start.disabled = false;
            horas = 0;
            minutos = 0;
            segundos = 0;
            milisegundos = 0;

            time.innerHTML = "00:00:00:00";

        });

        continueBtn.addEventListener("click", () => {

            reset.disabled = true;
            continueBtn.disabled = true;
            start.disabled = true;
            stop.disabled = false;

            interval = setInterval(countTime, 10);

        });

    });

    function countTime() {
        milisegundos++;

        if (milisegundos === 100) {
            milisegundos = 0;
            segundos++;
        }

        if (segundos === 60) {
            segundos = 0;
            minutos++;
        }

        if (minutos === 60) {
            minutos = 0;
            horas++;
        }

        time.innerHTML = `${horas < 10 ? "0" + horas : horas}:${minutos < 10 ? "0" + minutos : minutos}:${segundos < 10 ? "0" + segundos : segundos}:${milisegundos < 10 ? "0" + milisegundos : milisegundos}`;
    }

});
