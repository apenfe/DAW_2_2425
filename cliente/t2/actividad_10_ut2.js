window.addEventListener("DOMContentLoaded", function () {

    let num = 1;
    let parrafo = document.createElement("p");

    do {

        parrafo.innerHTML += "4 / " + num + " = " + (4 / num) + "<br>";
        num++;

    } while (num <= 10);


    document.body.appendChild(parrafo);

});

