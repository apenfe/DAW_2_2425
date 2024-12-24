const lista = document.getElementById('lista');

lista.addEventListener('click', function (e) {
    if (e.target.tagName === 'LI') {

        const items = lista.getElementsByTagName('li');
        for (let item of items) {
            item.classList.remove('resaltado');
        }

        e.target.classList.add('resaltado');
    }
});

lista.addEventListener('dblclick', function (e) {
    if (e.target.tagName === 'LI') {
        e.target.remove();
    }
});