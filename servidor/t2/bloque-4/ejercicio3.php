<?php
function descifrar($cadena, $clave){

    $claveNumerica = -1;

    // Probar todas las posibles claves de 0 a 25 para descifrar
    for ($i = 0; $i < 26; $i++) {
        // Intentar cifrar la clave con el valor actual de $i
        $claveCifrada = cifrado($clave, $i);

        // Mostrar para debug el cifrado de la palabra clave en cada iteración
        echo "Clave cifrada con desplazamiento $i: $claveCifrada <br>";

        // Verificar si la palabra cifrada está en el texto
        if(buscaPalabra($claveCifrada, $cadena)){
            $claveNumerica = $i;
            echo "Palabra encontrada con clave: " . $i . "<br>";
            break; // Detener el bucle una vez encontrada la clave
        }
    }

    // Si se encontró una clave válida, descifrar el texto
    if ($claveNumerica >= 0) {
        $out = cifrado($cadena, 26 - $claveNumerica); // Descifrar el texto
        return $out;
    } else {
        return "No se encontró la palabra clave.";
    }
}

function buscaPalabra($palabra, $texto) {
    // Convertir ambos a mayúsculas para hacer la búsqueda insensible a mayúsculas
    $palabra = strtoupper($palabra);
    $texto = strtoupper($texto);

    // Usar strpos para buscar la palabra en el texto
    return strpos($texto, $palabra) !== false; // Retorna true si se encuentra la palabra
}

function cifrado($cadena, $numero){

    $out = "";
    $cadena = strtoupper($cadena);

    for($i = 0; $i < strlen($cadena); $i++){
        if(esMayuscula($cadena[$i])){
            // Obtener el valor ASCII del carácter actual
            $ascii = ord($cadena[$i]);

            // Aplicar el desplazamiento manteniendo el alfabeto circular
            $nuevoAscii = (($ascii - 65 + $numero) % 26) + 65;

            // Convertir el nuevo código ASCII de vuelta a carácter y añadirlo a la salida
            $out .= chr($nuevoAscii);

        } else {
            // Conservar cualquier carácter no mayúsculo
            $out .= $cadena[$i];
        }
    }
    return $out;
}

function esMayuscula($char) {
    return preg_match("/^[A-Z]$/", $char);
}

// Ejemplo de uso
echo descifrar("LEGREXIRDRVJLEKVOKFHLVTFEKZVEVKFURJCRJCVKIRJUVCRSVTVURIZFLEVAVDGCFVJTRURMVQHLVKIRSRAFWVCZODVGRXRLENYZJBP", "FELIX");

?>
