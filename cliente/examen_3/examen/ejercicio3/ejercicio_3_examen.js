document.addEventListener("DOMContentLoaded", function () {

    let busqueda = document.getElementById("searchInput");
    let tabla = document.getElementById("dataTable");

    // comanzar la busqueda con keydown
    busqueda.addEventListener("keydown", function () {

        let texto = busqueda.value;
        let filas = tabla.getElementsByTagName("tr");

        // recorrer las filas
        for (let i = 1; i < filas.length; i++) {

            // establecer inicialmente que no se muestran
            let muestro = false;

            // obtener sus celdas
            let celdas = filas[i].getElementsByTagName("td");

            // recorrerlas
            for (let j = 0; j < celdas.length; j++) {

                // si se localiza coincidencia poner que se muestra y hacer break
                if (celdas[j].textContent.includes(texto)) {
                    muestro = true;
                    break;
                }
            }

            // ocultar o mostrat fila
            if (muestro) {
                filas[i].style.display = "";
            } else {
                filas[i].style.display = "none";
            }
        }
    });

});