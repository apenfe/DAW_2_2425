window.addEventListener("DOMContentLoaded", () => {

    /*
    Visualizar en el documento del navegador las dimensiones de la ventana y que
    se actualice cuando se redimensione la misma.
    */

    let ancho = document.getElementById("ancho");
    let alto = document.getElementById("alto");

    window.addEventListener("resize", mostrarDimensiones);

    function mostrarDimensiones() {

        ancho.textContent = 'Ancho interior del navegador: ' + window.innerWidth;
        alto.textContent = 'Alto interior del navegador: ' + window.innerHeight;
    }

});
