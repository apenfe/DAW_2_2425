<?php

class Etiqueta {

    public $etiqueta;
    public $contenido;
    public $atributos;

    public function __construct($etiqueta="div", $contenido = "", $atributos="") {
        $this->etiqueta = $etiqueta;
        $this->contenido = $contenido;
        $this->atributos = $atributos;
    }

    public function mostrar($contenido = null) {
        $salida = "<$this->etiqueta $this->atributos>";
        if($contenido == null){
            $salida .= $this->contenido;
        }else{
            $salida .= $contenido;
        }
        $salida .= "</$this->etiqueta>";
        return $salida;
    }

}
