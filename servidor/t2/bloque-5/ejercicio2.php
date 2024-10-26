<?php
/*
 * Escribir un programa que calcule los números primos de 1 a 100 utilizando el llamado método de la criba de
 * Eratóstenes. Este método consiste en definir e inicializar un array con todos sus elementos a TRUE e ir
 * tachando (pasando a FALSE) en pasadas sucesivas todos los múltiplos de los números primos que vayamos encontrando.
 */

$primos = [];
for ($i = 1; $i <= 100; $i++) {
    $primos[$i] = true;
}

for ($i = 2; $i <= 100; $i++) {
    if ($primos[$i]) {
        for ($j = $i*2; $j <= 100; $j += $i) {
            $primos[$j] = false;
        }
    }
}

echo "Los números primos entre 1 y 100 son: ";
for ($i = 2; $i <= 100; $i++) {
    if ($primos[$i]) {
        echo $i ." ";
    }
}
?>

