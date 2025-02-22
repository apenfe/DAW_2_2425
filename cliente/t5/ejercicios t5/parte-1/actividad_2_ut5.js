window.addEventListener("DOMContentLoaded", () => {

    let text = document.getElementById("texto");
    let restantes = document.getElementById("restantes");
    const maximo = 50;

    text.addEventListener("input", () => {

        let longitud = text.value.length;

        if (longitud > maximo) {
            text.value = text.value.substring(0, maximo);
            longitud = maximo;
            alert("Has superado el límite de caracteres");
        }

        restantes.innerHTML = "Caracteres restantes: " + (maximo - longitud);

    });

});