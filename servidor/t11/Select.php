<?php

class Select
{
    public $name;
    public $options;

    public function __construct($name, $options) {
        $this->name = $name;
        $this->options = $options;
    }

    public function imprimete(){
        $html = "<select name='$this->name'>";
        foreach ($this->options as $value => $text) {
            $html .= "<option value='$value'>$text</option>";
        }
        $html .= "</select>";
        return $html;
    }
}

$select = new Select('paises', [
    'es' => 'España',
    'fr' => 'Francia',
    'it' => 'Italia',
    'uk' => 'Reino Unido',
    'us' => 'Estados Unidos',
]);

echo $select->imprimete();