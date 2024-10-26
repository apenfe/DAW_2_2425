window.addEventListener("DOMContentLoaded", () => {

    let texto = document.getElementById("texto");
    let busqueda = document.getElementById("busqueda");
    let reemplazo = document.getElementById("reemplazo");
    let btn = document.getElementById("reemplazar");

    btn.addEventListener("click", () => {
        let textoReemplazado = texto.value.replaceAll(busqueda.value, reemplazo.value);
        texto.value = textoReemplazado;
    });

});
