const elementos = document.querySelectorAll('.elemento');

elementos.forEach(elemento => {

    elemento.addEventListener('click', function () {
        // Cambiar color de fondo del elemento clicado
        this.style.backgroundColor = 'lightgray';

        // Deshabilitar eventos de clic en los demás elementos
        elementos.forEach(otroElemento => {
            if (otroElemento !== this) {
                otroElemento.style.backgroundColor = 'white';
            }
        });
    });
});