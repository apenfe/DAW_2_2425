document.addEventListener("DOMContentLoaded", () => {

    // se carga el boton y la url sobre la que vamos a trabajar
    let boton = document.getElementById("fetchBoton");
    let url = "https://jsonplaceholder.typicode.com/posts";

    // se agrega una funcion de callback al boton para procesar la peticion
    boton.addEventListener("click", cargarPost(url));

    function cargarPost(url) {

        // se realiza el fetch a la url indicada
        fetch(url)
            .then(response => response.json()) // se procesa la respuesta y se convierte en json
            .then(data => {

                // se carga la tabla y de esta se obtiene el tbody
                let tabla = document.getElementById("postTabla");
                let tbody = tabla.getElementsByTagName("tbody")[0];

                // se crea el contenido de la tabla
                let contenido = "";

                // por cada post cargado se agrega un nuevo tr con sus datos correspondientes
                data.forEach(post => {
                    contenido += `
                <tr>
                    <td>${post.title}</td>
                    <td>${post.body}</td>
                </tr>
                `;
                });

                // finalmente al tbody se ele agrega el contenido del tamplate con todos los datos
                tbody.innerHTML = contenido;
            })
            .catch(error => {
                console.log(error); // en caso de producirse un error se muestra por consola
            });
    }

});