<?php

require_once 'Select.php';

class SelectPredeterminado extends Select
{
    public $predeterminado;

    public function __construct($name, $options, $predeterminado) {
        parent::__construct($name, $options);
        $this->predeterminado = $predeterminado;
    }

    public function imprime() {
        $html = "<select name='$this->name'>";
        foreach ($this->options as $value => $text) {
            if($value == $this->predeterminado){
                $html .= "<option value='$value' selected>$text</option>";
            }else{
                $html .= "<option value='$value'>$text</option>";
            }
        }
        $html .= "</select>";
        return $html;
    }
}

$opciones = [
    'es' => 'España',
    'fr' => 'Francia',
    'it' => 'Italia',
    'uk' => 'Reino Unido',
    'us' => 'Estados Unidos',
];

$select = new SelectPredeterminado('paises', $opciones, 'it');
echo $select->imprime();
