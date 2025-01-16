document.addEventListener('DOMContentLoaded', function() {
    let tabla = document.getElementById('dataTable');
    let buscador = document.getElementById('searchInput');

    buscador.addEventListener('input', function() {
        let filtro = buscador.value.toLowerCase().trim();
        let filas = tabla.getElementsByTagName('tr');

        for (let i = 1; i < filas.length; i++) { // Empezar en 1 para saltar el encabezado
            let celdas = filas[i].getElementsByTagName('td');
            let coincide = false;

            for (let j = 0; j < celdas.length; j++) {
                if (celdas[j].textContent.toLowerCase().includes(filtro)) {
                    coincide = true;
                    break;
                }
            }

            if (coincide) {
                filas[i].style.display = '';
            } else {
                filas[i].style.display = 'none';
            }
        }
    });
});