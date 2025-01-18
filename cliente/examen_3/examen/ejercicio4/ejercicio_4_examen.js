document.addEventListener("DOMContentLoaded", function () {

    // obtener el container
    let info = document.getElementById("informacion");

    // obtener el nuemro de enlaces de la pagina, crear un p y mostrarlo en el contenedor
    let numeroDeEnlacesEnLaPagina = document.getElementsByTagName("a").length;
    let resultado1 = document.createElement("p");
    resultado1.textContent = "Numero de enlaces en la página: " + numeroDeEnlacesEnLaPagina;
    info.appendChild(resultado1);

    // obtener la direccion del segundo enlace, crear un p y mostrarlo en el contenedor
    let direccionAlaQueEnlazaelSegundoEnlace = document.getElementsByTagName("a")[1].href;
    let resultado2 = document.createElement("p");
    resultado2.textContent = "Dirección del segundo enlace: " + direccionAlaQueEnlazaelSegundoEnlace;
    info.appendChild(resultado2);

    // obtener el nuemro de enlaces que llevan a http://enlace, crear un p y mostrarlo en el contenedor
    let numeroDeEnlacesQueEnlazanA = document.querySelectorAll("a[href='http://enlace/']").length;
    let resultado3 = document.createElement("p");
    resultado3.textContent = "Nuemro de enlaces que enlazan a http://enlace: " + numeroDeEnlacesQueEnlazanA;
    info.appendChild(resultado3);

    // obtener el nuemro de enlaces contenido en el segundo parrafo
    let numeroDeEnlacesEnElSegundoParrafo = document.querySelectorAll("p:nth-child(2) a").length;
    let resultado4 = document.createElement("p");
    resultado4.textContent = "Numero de enlaces en el segundo parrafo: " + numeroDeEnlacesEnElSegundoParrafo;
    info.appendChild(resultado4);
});