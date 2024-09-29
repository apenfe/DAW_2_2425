<?php

class Etiqueta {

    public $tag;
    public $contenido;
    public $atributos;

    public function __construct($tag="div", $contenido = "", $atributos="") {
        $this->tag = $tag;
        $this->contenido = $contenido;
        $this->atributos = $atributos;
    }

    public function mostrar($contenido = null) {
        $salida = "<$this->tag $this->atributos>";
        if($contenido == null){
            $salida .= $this->contenido;
        }else{
            $salida .= $contenido;
        }
        $salida .= "</$this->tag>";
        return $salida;
    }

}
