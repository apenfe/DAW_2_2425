<?php

require_once "Plantilla.php";

class PlantillaEmail extends Plantilla{

    private $subject;
    private $to;

    public function __construct($to, $subject, $body){
        parent::__construct($body);
        $this->subject = $subject;
        $this->to = $to;
    }

    protected function render(){
        mail($this->to, $this->subject, $this->htmlGenerado);
    }

}
