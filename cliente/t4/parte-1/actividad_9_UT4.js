window.addEventListener("DOMContentLoaded", () => {

    let sustituir = document.getElementById("sustituir");

    sustituir.addEventListener("click", () => {

        let texto = document.getElementById("texto").value;
        let busqueda = document.getElementById("busqueda").value;

        let reemplazo = "X".repeat(busqueda.length);

        let resultado = texto.replace(busqueda, reemplazo);

        document.getElementById("texto").value = resultado;

    });

});
