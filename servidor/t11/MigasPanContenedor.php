<?php

require_once 'MigasPan.php';

class MigasPanContenedor extends MigasPan {

    private $contedor;

    public function __construct($separador, $contenedor) {
        parent::__construct($separador);
        $this->contedor = new Etiqueta($contenedor);
    }

    public function mostrar() {
        return $this->contedor->mostrar(parent::mostrar());
    }

}




