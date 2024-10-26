window.addEventListener("DOMContentLoaded", function () {

    let texto = this.prompt("Introduce un texto");

    if (isNaN(texto) && texto != null && typeof texto === "string") {
        let h2 = document.createElement("h2");
        h2.innerHTML = "Se ha introducido un texto: " + texto;
        document.body.appendChild(h2);
    } else if (!isNaN(texto) && texto != null && texto != "") {
        let h2 = document.createElement("h2");
        h2.innerHTML = "Se ha introducido un numero: " + texto;
        document.body.appendChild(h2);
    } else {
        let h2 = document.createElement("h2");
        h2.innerHTML = "No se ha introducido nada";
        document.body.appendChild(h2);
    }

});

