const lista = document.getElementById('lista');

lista.addEventListener('click', function (e) {
    if (e.target.tagName === 'LI') {
        // Remover resaltado de todos los elementos
        const items = lista.getElementsByTagName('li');
        for (let item of items) {
            item.classList.remove('resaltado');
        }
        // Resaltar el elemento clicado
        e.target.classList.add('resaltado');
    }
});

lista.addEventListener('dblclick', function (e) {
    if (e.target.tagName === 'LI') {
        // Eliminar el elemento con doble clic
        e.target.remove();
    }
});