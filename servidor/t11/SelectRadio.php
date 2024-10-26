<?php

require_once 'Select.php';

class SelectRadio extends Select
{
    public $name;
    public $options;
    public $type;

    public function __construct($name, $options, $type) {
        $this->name = $name;
        $this->options = $options;
        $this->type = $type;
    }

    public function imprime(){
        $html = "<div>";
        foreach ($this->options as $value => $text) {
            $html .= "<input type='$this->type' name='$this->name' value='$value'>$text<br>";
        }
        $html .= "</div>";
        return $html;
    }

}

$radio = new SelectRadio('radio', array('1' => 'Option 1', '2' => 'Option 2'), 'radio');

echo $radio->imprime();