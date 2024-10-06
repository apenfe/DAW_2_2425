window.addEventListener("DOMContentLoaded", function () {
    /* 
    Implementa una página Web que utilizando código JavaScript, 
    mediante la función prompt, pida al usuario que introduzca 
    algún tipo de entrada. Si la entrada es de tipo numérico, 
    o su evaluación puede dar lugar a un número, que escriba en 
    el documento ese número, y si no es de tipo numérico 
    (y su evaluación tampoco), que diga que no puede evaluarse 
    y que escriba en el documento la respuesta introducida por el usuario.
    */
    let entrada = prompt("Introduce algo");

    let div = document.getElementById("entrada");

    if (!isNaN(parseFloat(entrada))) {
        let p = document.createElement("p");
        p.textContent = "El número introducido es " + entrada;
        div.appendChild(p);
    } else {
        let p = document.createElement("p");
        p.textContent = "No se puede evaluar la entrada. La entrada es: " + entrada;
        div.appendChild(p);
    }

});