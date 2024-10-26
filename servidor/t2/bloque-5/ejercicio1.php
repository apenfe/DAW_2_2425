<?php
/*
 * Realizar un programa que genere 20 números aleatorios entre el 0 y el 10 y los guarde en un array. Después:
 * Calculará la media del array
 * Mostrará el array ordenado de menor a mayor.
 * Mostrará una tabla con el número y la cantidad de veces que aparece
 */

$numeros = [];

for ($i = 1; $i <= 20; $i++) {
    $numeros[] = rand(1,10);
}
$media = 0;
for ($i = 1; $i <= 20; $i++) {
    $media += $numeros[$i-1];
}

echo "La media es: ". $media/20 ."<br>";

sort($numeros);
for ($i = 1; $i <= 20; $i++) {
    echo $numeros[$i-1] ." ";
}

echo "<table>";

$min = $numeros[0];
$count = 0;
echo "<tr>";
echo "<td>Numero</td>";
echo "<td>Cantidad</td>";
echo "</tr>";
echo "<tr>";
for ($i = 1; $i <= 20; $i++) {

    if($numeros[$i-1] > $min || $i==20){

        if($i==20){
            $count++;
        }

        echo "<td>".$min."</td>";
        echo "<td>".$count."</td>";
        echo "</tr>";
        $min = $numeros[$i-1];
        $count = 0;

    }

    $count++;

}
echo "</table>";