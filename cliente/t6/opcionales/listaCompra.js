document.addEventListener('DOMContentLoaded', function() {

    let itemInput = document.getElementById('itemInput');
    let addBoton = document.getElementById('addItemButton');
    let lista = document.getElementById('shoppingList');

    addBoton.addEventListener('click', function() {
        let item = itemInput.value;
        let itemElement = document.createElement('li');
        itemElement.textContent = item;
        lista.appendChild(itemElement);
        itemInput.value = '';

        let botonBorrar = document.createElement('button');
        botonBorrar.textContent = 'Borrar';
        itemElement.appendChild(botonBorrar);

        let botonComprado = document.createElement('button');
        botonComprado.textContent = 'Comprado';
        itemElement.appendChild(botonComprado);

        botonBorrar.addEventListener('click', function() {
            itemElement.remove();
        });

        botonComprado.addEventListener('click', function() {
            itemElement.style.textDecoration = 'line-through';
        });
    });
});