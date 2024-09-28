<?php

class Enlace
{
    public $href;
    public $etiqueta;

    public function __construct($href, $etiqueta) {
        $this->href = $href;
        $this->etiqueta = $etiqueta;
    }

    public function mostrar() {
        return "<a href='$this->href'>$this->etiqueta</a>";
    }

}
