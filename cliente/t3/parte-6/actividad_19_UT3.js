window.addEventListener("DOMContentLoaded", () => {

    let texto = document.getElementById("texto");
    let cadena = document.getElementById("cadena");
    let btn = document.getElementById("contar");
    let resultado = document.getElementById("resultado");
    let veces = 0;
    let resul = `La cadena "${cadena.value}" se repite ${veces} veces en el texto`;

    btn.addEventListener("click", () => {
        let textoBusqueda = texto.value;
        let cadenaBusqueda = cadena.value;

        let indice = textoBusqueda.indexOf(cadenaBusqueda);

        while (indice != -1) {
            veces++;
            indice = textoBusqueda.indexOf(cadenaBusqueda, indice + 1);
        }

        resul = `La cadena "${cadenaBusqueda}" se repite ${veces} veces en el texto`;
        resultado.textContent = resul;


    });

});
