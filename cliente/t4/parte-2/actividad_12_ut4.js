function sumatorioRecursivo(n) {
    // Caso base
    if (n <= 1) {
        return n;
    }
    // Caso recursivo
    return n + sumatorioRecursivo(n - 1);
}

function calcularSumatorio() {
    const numero = parseInt(document.getElementById('numero').value);
    if (isNaN(numero) || numero < 0) {
        document.getElementById('resultado').textContent = 'Por favor, introduce un número válido positivo';
        return;
    }

    const resultado = sumatorioRecursivo(numero);
    let expresion = '';
    for (let i = numero; i >= 1; i--) {
        expresion += i + (i !== 1 ? '+' : '');
    }
    document.getElementById('resultado').textContent = `${numero} = ${expresion} = ${resultado}`;
}
