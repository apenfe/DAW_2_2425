window.addEventListener("DOMContentLoaded", function () {
    /* 
    2. Implementa una página Web que utilizando código JavaScript, 
    visualice en el documento del navegador, los números pares del
     1 al 100. Cada número, debe mostrarse en una línea diferente.
    */

    let div = document.getElementById("pares");

    for (let i = 1; i <= 100; i++) {
        if (i % 2 === 0) {
            let p = document.createElement("p");
            p.textContent = i;
            div.appendChild(p);
        }
    }



});