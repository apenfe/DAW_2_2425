<?php

class Enlace extends Etiqueta
{

    public $etiqueta;

    public function __construct($href, $texto) {
        parent::__construct('a', $texto, 'href="'.$href.'"');
    }

}
