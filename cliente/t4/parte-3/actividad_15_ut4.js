window.addEventListener("DOMContentLoaded", () => {

    /*
    Escribe un programa javaScript que obtenga una lista de nombres tecleados
    por el usuario, y los almacene en un array hasta que el usuario entre la cadena
    vacía. Visualiza en la página la siguiente información:
    a. El primer nombre tecleado por el usuario.
    b. El último nombre tecleado por el usuario.
    c. La lista de nombres en orden ascendente, introducidos por el usuario,
    cada uno de ellos en una línea diferente.
    */

    const nombres = [];

    let nombre = prompt("Introduce un nombre");

    while (nombre !== "") {
        nombres.push(nombre);
        nombre = prompt("Introduce un nombre");
    }

    const primerNombre = nombres[0];
    const ultimoNombre = nombres[nombres.length - 1];
    const nombresOrdenados = nombres.sort();

    const div = document.createElement("div");

    div.innerHTML = `
        <p>Primer nombre: ${primerNombre}</p>
        <p>Último nombre: ${ultimoNombre}</p>
        <p>Nombres ordenados:</p>
        <ul>
            ${nombresOrdenados.map(nombre => `<li>${nombre}</li>`).join("")}
        </ul>
    `;
    document.body.appendChild(div);

});