document.addEventListener("DOMContentLoaded", function () {

    // cargar el formulario
    let form = document.getElementById("usuForm");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        // cargar los datos del nuevo usuario
        let mensaje = document.getElementById("mensaje");
        let nombre = document.getElementById("nombre").value;
        let edad = document.getElementById("edad").value;

        // generar el nuevo id con Date
        let fecha = new Date();
        let id = fecha.getTime();

        // limpiar la lista
        mensaje.textContent = "";

        // Crear objeto con los datos
        let usuario = {
            id: id,
            nombre: nombre,
            edad: edad
        };

        // Guardar en el localStorage
        localStorage.setItem(id, JSON.stringify(usuario));

        // Mostrar mensaje de éxito
        mensaje.textContent = "Usuario guardado con éxito";

        // recargar la tabla con los datos almacenados
        mostrarDatosAlmacenados();
    });

    // funcion que se encarga de la carga de datos en la lista
    function mostrarDatosAlmacenados() {
        // cargar la lista del html y limpiarla inicialmente
        let lista = document.getElementById("listaDatos");
        lista.innerHTML = "";

        let elementos = [];

        // recorrer el local storage para poder mostrar todos los datos
        for (let i = 0; i < localStorage.length; i++) {
            let clave = localStorage.key(i);
            let valor = localStorage.getItem(clave);
            elementos.push(JSON.parse(valor));
        }

        // cargar los datos en la lista
        elementos.forEach(elemento => {
            // crear un nuevo li con el id, nombre y edad
            let li = document.createElement("li");
            li.textContent = `ID: ${elemento.id} - Nombre: ${elemento.nombre} - Edad: ${elemento.edad}`;

            // crear botones de edicion y borrado
            let botonBorrado = document.createElement("button");
            botonBorrado.textContent = "Borrar";
            let botonModificar = document.createElement("button");
            botonModificar.textContent = "Actualizar";

            // agragar los botones al li
            li.appendChild(botonBorrado);
            li.appendChild(botonModificar);
            lista.appendChild(li);

            // se agrega un evento al boton para que se realice el borrado de su elemento
            botonBorrado.addEventListener("click", function () {
                localStorage.removeItem(elemento.id);
                mostrarDatosAlmacenados();
            });

            // se agrga un evento al boton de modificacion
            botonModificar.addEventListener("click", function () {

                // primero se borra el elemento
                localStorage.removeItem(elemento.id);

                // se solicitan nuevos datos y se crea el nuevo id
                let nombre = prompt("Introduce el nuevo nombre");
                let edad = parseInt(prompt("Introduce la nueva edad"));
                let fecha = new Date();
                let id = fecha.getTime();

                // se crea nuevo objeto con la configuracion a guardar
                let usuario = {
                    id: id,
                    nombre: nombre,
                    edad: edad
                };

                // se almacena con su nueva clave y su contenido
                localStorage.setItem(id, JSON.stringify(usuario));

                // Mostrar mensaje de éxito
                mensaje.textContent = "Usuario guardado con éxito";

                // se vuelve a actualizar la lista
                mostrarDatosAlmacenados();
            });

        });
    }

    // mostrar datos almacenados, nada mas iniciar el programa
    mostrarDatosAlmacenados();

});