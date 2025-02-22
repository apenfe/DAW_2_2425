document.addEventListener("DOMContentLoaded", () => {

    /*
    Almacenar en una cookie el número de intentos de envío del formulario
    que se van produciendo y mostrar un mensaje en el contenedor "intentos"
    similar a: "Intento de Envíos del formulario: X". Es decir cada vez que le
    demos al botón de enviar tendrá que incrementar el valor de la cookie en 1
    y mostrar su contenido en el div antes mencionado. 
    */

    function getCookie(name) {
        let cookieArr = document.cookie.split(";");

        for (let i = 0; i < cookieArr.length; i++) {
            let cookiePair = cookieArr[i].split("=");

            if (name === cookiePair[0].trim()) {
                return decodeURIComponent(cookiePair[1]);
            }
        }
        return null;
    }

    function setCookie(name, value, days) {
        let expires = "";
        if (days) {
            let date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "") + expires + "; path=/";
    }

    let intentos = parseInt(getCookie("intentos")) || 0;
    document.getElementById("intentos").innerText = `Intento de Envíos del formulario: ${intentos}`;

    let formulario = document.getElementById('formulario');

    /*
    Cada vez que los campos NOMBRE y APELLIDOS pierdan el foco, el
    contenido que se haya escrito en esos campos se convertirá a mayúsculas.
    */
    let nombre = document.getElementById('nombre');
    let apellido = document.getElementById('apellidos');

    apellido.addEventListener("mouseover", () => {
        apellido.value = apellido.value.toUpperCase();
    });

    apellido.addEventListener("mouseout", () => {
        apellido.value = apellido.value.toLowerCase();
    });

    nombre.addEventListener('mouseover', () => {
        nombre.value = nombre.value.toUpperCase();
    });

    nombre.addEventListener("mouseout", () => {
        nombre.value = nombre.value.toLowerCase();
    });

    /*
    Realizar   una  función   que  valide  los  campos   de  texto   NOMBRE  y
    APELLIDOS.   Si   se   produce   algún   error   mostrar   el   mensaje   en   el
    contenedor "errores" y poner el foco en los campos correspondientes
    */

    function validarNombreApellidos() {
        let errores = document.getElementById('errores');
        errores.innerHTML = '';

        let error = false;

        if (nombre.value.trim() === '') {
            errores.innerHTML += '<p>El campo NOMBRE es obligatorio.</p>';
            nombre.focus();
            error = true;
        }

        if (apellido.value.trim() === '') {
            errores.innerHTML += '<p>El campo APELLIDOS es obligatorio.</p>';
            if (!error) {
                apellido.focus();
            }
            error = true
        }

        return !error;

    }

    /*
    Validar la EDAD que contenga solamente valores numéricos y que esté en
    el rango de 0 a 105. Si se produce algún error mostrar el mensaje en el
    contenedor "errores" y poner el foco en el campo EDAD
    */

    function validarEdad() {
        let edad = document.getElementById('edad');
        let errores = document.getElementById('errores');
        let edadValor = parseInt(edad.value, 10);

        if (isNaN(edadValor) || edadValor < 0 || edadValor > 105) {
            errores.innerHTML += '<p>El campo EDAD debe contener un valor numérico entre 0 y 105.</p>';
            edad.focus();
            return false;
        }
        return true;
    }

    /*
    Validar el NIF. Utilizar una expresión regular que permita solamente 8
    números un guión y una letra. Si se produce algún error mostrar el
    mensaje en el contenedor "errores" y poner el foco en el campo NIF. No
    es necesario validar que la letra sea correcta. Explicar las partes de la
    expresión regular mediante comentarios
    */

    function validarNIF() {
        let nif = document.getElementById('nif');
        let errores = document.getElementById('errores');
        let nifValor = nif.value.trim();

        // ^ - Inicio de la cadena
        // \d{8} - Ocho dígitos numéricos
        // - - Un guión
        // [A-Za-z] - Una letra (mayúscula o minúscula)
        // $ - Fin de la cadena

        let nifRegex = /^\d{8}-[A-Za-z]$/;

        if (!nifRegex.test(nifValor)) {
            errores.innerHTML += '<p>El campo NIF debe contener 8 números, un guión y una letra.</p>';
            nif.focus();
            return false;
        }
        return true;
    }

    /*
    Validar el E-MAIL. Utilizar una expresión regular que nos permita
    comprobar que el e-mail sigue un formato correcto. Si se produce algún
    error mostrar el mensaje en el contenedor "errores" y poner el foco en el
    campo E-MAIL. Explicar las partes de la expresión regular mediante
    comentarios
    */

    function validarEmail() {
        let email = document.getElementById('email');
        let errores = document.getElementById('errores');
        let emailValor = email.value.trim();

        // ^ - Inicio de la cadena
        // [a-zA-Z0-9._%+-]+ - Uno o más caracteres permitidos antes del @
        // @ - El símbolo arroba
        // [a-zA-Z0-9.-]+ - Uno o más caracteres permitidos para el dominio
        // \. - Un punto
        // [a-zA-Z]{2,} - Dos o más letras para el dominio de nivel superior
        // $ - Fin de la cadena

        let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (!emailRegex.test(emailValor)) {
            errores.innerHTML += '<p>El campo E-MAIL debe contener un formato válido.</p>';
            email.focus();
            return false;
        }
        return true;
    }

    /*
    Validar que se haya seleccionado alguna de las PROVINCIAS. Si se
    produce algún error mostrar el mensaje en el contenedor "errores" y poner
    el foco en el campo PROVINCIA
    */

    function validarProvincia() {
        let provincia = document.getElementById('provincia');
        let errores = document.getElementById('errores');

        if (provincia.value === '0') {
            errores.innerHTML += '<p>Debe seleccionar una PROVINCIA.</p>';
            provincia.focus();
            return false;
        }
        return true;
    }

    /*
    Validar el campo FECHA utilizando una expresión regular. Debe cumplir
    alguno de los siguientes formatos: dd/mm/aaaa o dd-mm-aaaa. No se pide
    validar que sea una fecha de calendario correcta. Si se produce algún error
    mostrar el mensaje en el contenedor "errores" y poner el foco en el campo
    FECHA. Explicar las partes de la expresión regular mediante comentarios.
    */

    function validarFecha() {
        let fecha = document.getElementById('fecha');
        let errores = document.getElementById('errores');
        let fechaValor = fecha.value.trim();

        // ^ - Inicio de la cadena
        // ( - Inicio del grupo de captura
        // \d{2} - Dos dígitos para el día
        // [\/-] - Un carácter de barra o guión
        // \d{2} - Dos dígitos para el mes
        // [\/-] - Un carácter de barra o guión
        // \d{4} - Cuatro dígitos para el año
        // ) - Fin del grupo de captura
        // $ - Fin de la cadena

        let fechaRegex = /^(\d{2}[\/-]\d{2}[\/-]\d{4})$/;

        if (!fechaRegex.test(fechaValor)) {
            errores.innerHTML += '<p>El campo FECHA debe contener un formato válido (dd/mm/aaaa o dd-mm-aaaa).</p>';
            fecha.focus();
            return false;
        }
        return true;
    }

    /*
    Validar el campo TELEFONO utilizando una expresión regular. Debe
    permitir 9 dígitos obligatorios. Si se produce algún error mostrar el
    mensaje   en   el   contenedor   "errores"   y   poner   el   foco   en   el   campo
    TELEFONO.   Explicar   las   partes   de   la   expresión   regular   mediante
    comentarios.
    */

    function validarTelefono() {
        let telefono = document.getElementById('telefono');
        let errores = document.getElementById('errores');
        let telefonoValor = telefono.value.trim();

        // ^ - Inicio de la cadena
        // \d{9} - Nueve dígitos numéricos
        // $ - Fin de la cadena

        let telefonoRegex = /^\d{9}$/;

        if (!telefonoRegex.test(telefonoValor)) {
            errores.innerHTML += '<p>El campo TELEFONO debe contener 9 dígitos.</p>';
            telefono.focus();
            return false;
        }
        return true;
    }

    /*
    Validar el campo HORA utilizando una expresión regular. Debe seguir el
    patrón de hh:mm. No es necesario validar que sea una hora correcta. Si se
    produce algún error mostrar el mensaje en el contenedor "errores" y poner
    el foco en el campo HORA. Explicar las partes de la expresión regular
    mediante comentarios
    */

    function validarHora() {
        let hora = document.getElementById('hora');
        let errores = document.getElementById('errores');
        let horaValor = hora.value.trim();

        // ^ - Inicio de la cadena
        // ( - Inicio del grupo de captura
        // [01]?\d - Un dígito opcional (0 o 1) seguido de un dígito (0-9) para las horas de 00 a 19
        // | - O
        // 2[0-3] - Un 2 seguido de un dígito (0-3) para las horas de 20 a 23
        // ) - Fin del grupo de captura
        // : - Dos puntos
        // [0-5]\d - Un dígito (0-5) seguido de un dígito (0-9) para los minutos
        // $ - Fin de la cadena

        let horaRegex = /^([01]?\d|2[0-3]):[0-5]\d$/;

        if (!horaRegex.test(horaValor)) {
            errores.innerHTML += '<p>El campo HORA debe contener un formato válido (hh:mm).</p>';
            hora.focus();
            return false;
        }
        return true;
    }

    formulario.addEventListener('submit', (event) => {

        intentos++;
        setCookie("intentos", intentos, 7);
        document.getElementById("intentos").innerText = `Intento de Envíos del formulario: ${intentos}`;

        if (!validarNombreApellidos() || !validarEdad() || !validarNIF() || !validarEmail() || !validarProvincia() || !validarFecha() || !validarTelefono() || !validarHora()) {
            event.preventDefault();
        } else {
            let respuesta = confirm("Desea enviar los datos?");

            if (!respuesta) {
                event.preventDefault();
                return false;
            }
        }

    });

});
