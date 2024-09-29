<?php

abstract class Plantilla{

    private $html;
    protected $htmlGenerado;

    public function __construct($html){
        $this->html = $html;
        $this->htmlGenerado = "";
    }

    protected abstract function render();

    private function cargarDatos($datos){
        $this->htmlGenerado = $this->html;
        foreach ($datos as $clave => $valor){
            $this->htmlGenerado = str_replace("%".$clave."%", $valor, $this->htmlGenerado);
        }
    }

    public function renderData($datos){
        $this->cargarDatos($datos);
        $this->render();
    }

}
