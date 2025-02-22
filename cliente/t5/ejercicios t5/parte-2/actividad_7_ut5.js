document.addEventListener('DOMContentLoaded', function () {
    // Log existing cookies on page load
    console.log('Cookies at load:', document.cookie);

    // Try to load existing cookies
    document.getElementById('codigo').value = getCookie('codigo') || '';
    document.getElementById('nombre').value = getCookie('nombre') || '';

    document.getElementById('addCookie').addEventListener('click', function () {
        setCookie('codigo', document.getElementById('codigo').value);
        setCookie('nombre', document.getElementById('nombre').value);
        console.log('Cookies after setting:', document.cookie);
    });

    document.getElementById('deleteCookie').addEventListener('click', function () {
        deleteCookie('codigo');
        deleteCookie('nombre');
        document.getElementById('codigo').value = '';
        document.getElementById('nombre').value = '';
        console.log('Cookies after deletion:', document.cookie);
    });
});

function setCookie(nombre, valor) {
    // Set cookie with expiration date (30 days from now)
    const d = new Date();
    d.setTime(d.getTime() + (30 * 24 * 60 * 60 * 1000));
    const expires = "expires=" + d.toUTCString();
    document.cookie = nombre + "=" + valor + ";" + expires + ";path=/";
    console.log(`Setting cookie ${nombre}=${valor}`);
}

function getCookie(nombre) {
    let name = nombre + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            console.log(`Found cookie ${nombre}:`, c.substring(name.length, c.length));
            return c.substring(name.length, c.length);
        }
    }
    console.log(`Cookie ${nombre} not found`);
    return "";
}

function deleteCookie(nombre) {
    document.cookie = nombre + "=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;";
    console.log(`Deleted cookie ${nombre}`);
}
