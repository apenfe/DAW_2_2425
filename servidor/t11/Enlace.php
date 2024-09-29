<?php

class Enlace extends Etiqueta
{

    public $etiqueta;

    public function __construct($href, $etiqueta) {
        parent::__construct('a', $etiqueta, 'href="'.$href.'"');
    }

}
