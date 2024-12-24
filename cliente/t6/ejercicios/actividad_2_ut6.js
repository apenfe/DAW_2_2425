const elementos = document.querySelectorAll('.elemento');

elementos.forEach(elemento => {

    elemento.addEventListener('click', function () {

        this.style.backgroundColor = 'lightgray';

        elementos.forEach(otroElemento => {
            if (otroElemento !== this) {
                otroElemento.style.backgroundColor = 'white';
            }
        });
    });
});