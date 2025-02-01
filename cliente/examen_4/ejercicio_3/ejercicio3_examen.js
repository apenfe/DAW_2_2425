document.addEventListener("DOMContentLoaded", () => {

    // se carga el boton y la url de tarbajo
    let boton = document.getElementById("xhrBoton");
    let url = "https://jsonplaceholder.typicode.com/users";

    // se carga la lista sobre la que s emostraran los usuarios
    let lista = document.getElementById("usuariosLista");

    // se agraga una funcion de callback para hacer la carga por XmlHttpTrquest
    boton.addEventListener("click", cargarUsuariosXmlHttpRequest(url));

    function cargarUsuariosXmlHttpRequest(url) {

        // se crea una nueva instancia de XMLHttpRequest
        let xhr = new XMLHttpRequest();

        // se establece el metodo get y la url hacia donde apunta y se especifica que es asincrono
        xhr.open("GET", url, true);

        // se procesa la peticion
        xhr.onreadystatechange = function () {

            // en caso de estar lista y que el codigo http sea exitos
            if (xhr.readyState == 4 && xhr.status == 200) {

                // se convierte la peticion en un json
                let usuarios = JSON.parse(xhr.responseText);

                // se recorren los usuarios
                usuarios.forEach(usuario => {

                    // por cada usuario se crea un nuevo li
                    let li = document.createElement("li");

                    // se indica en cada li el nombre y telefono
                    li.textContent = "Nombre: " + usuario.name + ". Telefono: " + usuario.phone;

                    // finalmente se agrega a la lista anteriormente cargada
                    lista.appendChild(li);
                });
            }
        }

        // se envia la peticion, como es asincrono da igual el orden
        xhr.send();
    }

});