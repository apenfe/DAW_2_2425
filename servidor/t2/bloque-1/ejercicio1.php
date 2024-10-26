<?php

// Dado un valor en pesetas, convertirlo a euros. La solución deberá tener dos decimales.

$pesetas = 1000000;

$euros = round($pesetas / 166.386, 2);

echo "El valor en euros es: " . $euros;

?>