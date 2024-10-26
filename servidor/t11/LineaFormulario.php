<?php

require_once "Select.php";

class LineaFormulario
{
    public $campo;
    public $objeto;

    public function __construct($campo, Select $objeto)
    {
        $this->campo = $campo;
        $this->objeto = $objeto;
    }

    public function mostrar() {
        $html = "<p>";
        $html .= "<label>{$this->campo}</label>";
        $html .= "<span>#campo#</span>";
        $html .= "</p>";
        return str_replace("#campo#", $this->objeto->imprime(), $html);
    }
}

$formulario = new LineaFormulario("Pais", new Select("pais", array("es" => "España", "fr" => "Francia", "it" => "Italia")));
echo $formulario->mostrar();