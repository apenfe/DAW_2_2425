document.addEventListener("DOMContentLoaded", function () {

    let intentos = document.getElementById("intentos");
    let botonEnvio = document.getElementById("enviar");
    let errores = document.getElementById("errores");
    let botonClear = document.getElementById("button");
    intentos.textContent = "Numero de intentos: " + 0;

    // evento para validar los campos del formulario
    botonEnvio.addEventListener("click", function (event) {
        errores.textContent = "";

        // validacion de la fecha
        let fecha = document.getElementById("fecha").value;
        let regex = new RegExp("^[0-9]{2}/[0-9]{2}/[0-9]{4}$");
        if (!regex.test(fecha)) {
            document.getElementById("fecha").focus();
            errores.textContent += "La fecha debe tener el formato dd/mm/aaaa\n";
        }

        // validacion de la hora
        let hora = document.getElementById("hora").value;
        regex = new RegExp("^[0-9]{2}:[0-9]{2}$");
        if (!regex.test(hora)) {
            document.getElementById("hora").focus();
            errores.textContent += "La hora debe tener el formato hh:mm\n";
        }

        // validacion de que este seleccionada una opcion del select
        let tipoVehiculo = document.getElementById("tipoVehiculo");
        if (tipoVehiculo.selectedIndex == 0) {
            document.getElementById("tipoVehiculo").focus();
            errores.textContent += "Debe seleccionar un tipo de vehículo\n";
        }

        // validacion de matricula
        let matricula = document.getElementById("matricula").value;
        regex = new RegExp("^[0-9]{4} [A-Z]{3}$");
        if (!regex.test(matricula)) {
            document.getElementById("matricula").focus();
            errores.textContent += "La matrícula debe tener el formato 1234ABC\n";
        }

        // validacion de nombre
        let nombre = document.getElementById("nombre").value;
        regex = new RegExp("^[A-Z ]+$");
        if (!regex.test(nombre)) {
            document.getElementById("nombre").focus();
            errores.textContent += "El nombre debe contener solo letras y espacios\n";
        }

        // validacion de correo electronico
        // la expresion indica que debe comenzar y terminar por lo especificado "^...$"
        // luego se evalua un primer grupo compuesto de letras mayusculas y minusculas 
        // y numeros al menos deben aparecer una o mas veces
        // a continuacion se comprueba la @ y otro grupo de solo mayusculas y minusculas una o mas veces
        // se evalua la existencia del punto escapado con \ para que se detecte como caracter
        // finalmente se evalua el nombre de espacio que he especificadoq ue tenga una longitud de entre 2 o 3 letras mayusculas o minusculas
        let correo = document.getElementById("correo").value;
        regex = new RegExp("^[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]{2,3}$");
        if (!regex.test(correo)) {
            document.getElementById("correo").focus();
            errores.textContent += "El email debe ser de formato valido algo@algo.algo\n";
        }

        // validacion de que el checkbox de condiciones este seleccionado
        let condiciones = document.getElementById("condiciones");
        if (!condiciones.checked) {
            document.getElementById("condiciones").focus();
            errores.textContent += "Debe aceptar las condiciones\n";
        }

        // alert para confirmar si se desea enviar el formulario y tambien compreuba que no hay errores
        if (errores.textContent == "" && confirm("¿Desea enviar el formulario?")) {
            intentos.textContent = "Formulario enviado";
            // redirigir a la web especificada
            event.target.submit();
        }

        // almacenar el numero de intentos en una cookie
        let intentos = document.getElementById("intentos").textContent;
        intentos = parseInt(intentos);
        intentos++;
        setCookie("intentos", intentos);

    });

    let nombre = document.getElementById("nombre");
    let matricula = document.getElementById("matricula");

    // establecer las mayusculas si se pierde el foco del nombre
    nombre.addEventListener("blur", function () {
        let valor = nombre.value;
        nombre.value = valor.toUpperCase();
    });

    // establecer las mayusculas si se pierde el foco de la matricula
    matricula.addEventListener("blur", function () {
        let valor = matricula.value;
        matricula.value = valor.toUpperCase();
    });

    // establecer el boton de clear para limpiar errores e intentos
    botonClear.addEventListener("click", function () {
        errores.textContent = "";
        intentos.textContent = "";
    });

    // almacenar cookie con el numeor de intentos
    function setCookie(name, value) {
        let date = new Date();
        date.setTime(date.getTime() + (1 * 24 * 60 * 60 * 1000));
        let expires = "expires=" + date.toUTCString();
        document.cookie = name + "=" + value + ";" + expires + ";path=/";
    }

});