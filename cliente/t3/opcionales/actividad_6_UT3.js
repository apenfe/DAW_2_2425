window.addEventListener("DOMContentLoaded", () => {

    let boton = document.getElementById("boton");
    let nombre = document.getElementById("name");
    let apellido = document.getElementById("surname");
    let time = 0;

    let timer = setInterval(() => {
        time += 10;
    }, 10);

    boton.addEventListener("click", () => {
        clearInterval(timer);
        document.getElementById("tiempo").textContent = "Tiempo: " + time + " ms";
    });

});
