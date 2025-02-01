document.addEventListener("DOMContentLoaded", function () {

    // cargar el formulario
    let form = document.getElementById("usuForm");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        // cargar los datos del nuevo usuario
        let mensaje = document.getElementById("mensaje");
        let nombre = document.getElementById("name").value;
        let edad = document.getElementById("edad").value;
        // limpiar el mensaje
        mensaje.textContent = "";

        // Crear objeto con los datos
        let usuario = {
            nombre: nombre,
            edad: edad
        };

        // funccion para crear una nueva entrada
        almacenarNuevoUsuario(usuario);

        // recargar la tabla con los datos almacenados
        mostrarDatosAlmacenados();
    });

    // funcion que se encarga de la carga de datos en la lista
    async function mostrarDatosAlmacenados() {
        // cargar la tabla del html y limpiarla inicialmente
        let tabla = document.getElementById("clientesLista");
        tabla.innerHTML = "";

        // recorrer el local storage para poder mostrar todos los datos
        cargarTodosLosUsuarios();
    }

    // mostrar datos almacenados, nada mas iniciar el programa
    mostrarDatosAlmacenados();

    // funcion para agregar un nuevo usuario
    function almacenarNuevoUsuario(usuario, edicion = false) {
        // abrir base datos indexedDb BDej2
        let request = indexedDB.open("BDej2", 1);

        // craer la tabla clientes si no existe
        request.onupgradeneeded = function (event) {
            db = event.target.result;
            // crear almacen de objetos
            db.createObjectStore("clientes", { keyPath: "id", autoIncrement: true });
        };

        // si se ha creado correctamente
        request.onsuccess = function (event) {
            db = event.target.result;

            // abrir transaccion de lectura y escritura
            let transaction = db.transaction(["clientes"], "readwrite");

            // abrir almacen de objetos
            let objectStore = transaction.objectStore("clientes");

            // añadir objeto al almacen
            let request = objectStore.add(usuario);

            // si se ha añadido correctamente
            request.onsuccess = function (event) {
                let mensaje = document.getElementById("mensaje");

                // si es modo edicion hacer una cosa y si es creacion hacer otra
                if (edicion) {
                    mensaje.textContent = "Usuario editado correctamente";
                } else {
                    mensaje.textContent = "Usuario añadido correctamente";
                }
            };

            // si ha habido un error
            request.onerror = function (event) {
                alert("Error al añadir el usuario");
            };
        };
    }

    // funcion para cargar todos los usuarios
    function cargarTodosLosUsuarios() {
        // abrir base datos indexedDb BDej2
        let request = indexedDB.open("BDej2", 1);

        request.onupgradeneeded = function (event) {
            db = event.target.result;
            // crear almacen de objetos
            db.createObjectStore("clientes", { keyPath: "id", autoIncrement: true });
        };

        // si se ha creado correctamente
        request.onsuccess = function (event) {
            db = event.target.result;

            // abrir transaccion de lectura y escritura
            let transaction = db.transaction(["clientes"], "readwrite");

            // abrir almacen de objetos
            let objectStore = transaction.objectStore("clientes");

            // cargar todos los datos en un array
            let request = objectStore.getAll();

            // mostrar los datos
            request.onsuccess = function (event) {

                console.log("Datos cargados correctamente");
                let tabla = document.getElementById("clientesLista");

                let data = event.target.result;

                for (let i = 0; i < data.length; i++) {
                    // crear un nuevo tr con el nombre, edad y acciones
                    let tr = document.createElement("tr");
                    let tdNombre = document.createElement("td");
                    tdNombre.textContent = data[i].nombre;
                    let tdEdad = document.createElement("td");
                    tdEdad.textContent = data[i].edad;
                    let tdAcciones = document.createElement("td");

                    // crear botones de edicion y borrado
                    let botonBorrado = document.createElement("button");
                    botonBorrado.textContent = "Borrar";
                    let botonModificar = document.createElement("button");
                    botonModificar.textContent = "Actualizar";

                    // agragar los botones al td
                    tdAcciones.appendChild(botonBorrado);
                    tdAcciones.appendChild(botonModificar);

                    // agregar los tds al tr
                    tr.appendChild(tdNombre);
                    tr.appendChild(tdEdad);
                    tr.appendChild(tdAcciones)

                    // agregar el tr a la tabla
                    tabla.appendChild(tr);

                    // se agrega un evento al boton para que se realice el borrado de su elemento
                    botonBorrado.addEventListener("click", function () {
                        // funcion para borrar el usuario
                        borrarUsuario(data[i]);
                    });

                    // se agrga un evento al boton de modificacion
                    botonModificar.addEventListener("click", function () {

                        // primero se borra el usuario
                        borrarUsuario(data[i]);

                        // se solicitan nuevos datos
                        let mensaje = document.getElementById("mensaje");
                        let nombre = prompt("Introduce el nuevo nombre");
                        let edad = prompt("Introduce la nueva edad");
                        // limpiar el mensaje
                        mensaje.textContent = "";

                        // Crear objeto con los datos
                        let usuario = {
                            nombre: nombre,
                            edad: edad
                        };

                        // se crea un nuevo usuario con el flag true para modo edicion
                        almacenarNuevoUsuario(usuario, true);
                    });
                }

            };

            // si ha habido un error
            request.onerror = function (event) {
                console.log("Error al añadir el usuario");
            };
        };
    }

    // funcion de borrado de usuarios
    let borrarUsuario = (usuario) => {
        // abrir base datos indexedDb BDej2
        let request = indexedDB.open("BDej2", 1);

        // si se ha creado correctamente
        request.onsuccess = function (event) {
            db = event.target.result;

            // abrir transaccion de borrado
            let transaction = db.transaction(["clientes"], "readwrite");

            // abrir almacen de objetos
            let objectStore = transaction.objectStore("clientes");

            // borrar el usuario
            let request = objectStore.delete(usuario.id);

            // si se ha añadido correctamente
            request.onsuccess = function (event) {
                let mensaje = document.getElementById("mensaje");

                // mostrar el mensaje
                mensaje.textContent = "Usuario eliminado correctamente";

                // recargar tabla tras el borrado de un elemento
                mostrarDatosAlmacenados();
            };

            // si ha habido un error
            request.onerror = function (event) {
                alert("Error al eliminar el usuario");
            };
        };
    };

});