window.addEventListener("DOMContentLoaded", function () {

    let num = 1;
    let parrafo = document.createElement("p");

    while (num <= 5) {
        parrafo.innerHTML += "5 + " + num + " = " + (num + 5) + "<br>";
        num++;
    }

    document.body.appendChild(parrafo);

});

