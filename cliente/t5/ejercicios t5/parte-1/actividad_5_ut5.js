window.addEventListener("DOMContentLoaded", () => {

    /*
    Implementa un JavaScript que cree un botón que cambie el color de fondo de la
página de forma aleatoria, cada vez que se haga clic sobre él
    */

    let boton = document.getElementById("boton");
    let body = document.body;

    boton.addEventListener("click", () => {
        let color = Math.floor(Math.random() * 16777215).toString(16);
        body.style.backgroundColor = "#" + color;
    });

});