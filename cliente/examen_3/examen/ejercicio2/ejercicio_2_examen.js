document.addEventListener("DOMContentLoaded", function () {
    let boton = document.getElementById("addItemButton");
    let texto = document.getElementById("itemInput");
    let lista = document.getElementById("shoppingList");

    // evento para ver cuando se agrega un item
    boton.addEventListener("click", function () {

        // crear el li y darle el contenido
        let item = document.createElement("li");
        item.textContent = texto.value;

        // crear boton de borrar
        let botnBorrar = document.createElement("button");
        botnBorrar.textContent = "Borrar";

        // crear boton de comprar
        let botnComprar = document.createElement("button");
        botnComprar.textContent = "Comprar";
        item.appendChild(botnBorrar);
        item.appendChild(botnComprar);
        lista.appendChild(item);

        // agragar listener para tachar lo comprado
        botnComprar.addEventListener("click", function () {
            item.style.textDecoration = "line-through";
        });

        // agragar listener para eliminar un item
        botnBorrar.addEventListener("click", function () {
            lista.removeChild(item);
        });
    });

});