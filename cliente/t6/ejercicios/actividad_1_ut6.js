document.getElementById('btnEnviar').addEventListener('click', function () {
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const resultado = nombre + ' ' + apellido;
    document.getElementById('resultado').textContent = resultado;
});