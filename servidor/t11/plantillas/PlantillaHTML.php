<?php

require_once "Plantilla.php";

class PlantillaHTML extends Plantilla{

    protected function render(){
        echo $this->htmlGenerado;
    }

}
