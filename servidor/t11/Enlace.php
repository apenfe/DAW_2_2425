<?php

require_once 'Etiqueta.php';

class Enlace extends Etiqueta
{

    public function __construct($href, $texto) {
        parent::__construct('a', $texto, 'href="'.$href.'"');
    }

}
