<?php

class MigasPanContenedor extends MigasPan {

    private $contedor;

    public function __construct($separador = '>', $contenedor = 'div') {
        parent::__construct($separador);
        $this->contedor = $contenedor;
    }

    public function showMigas() {
        return $this->contedor->mostrar(parent::showMigas());
    }

}

$migas = new MigasPanContenedor();
$migas->addMiga('google',"https://www.google.es" );
$migas->addMiga('mi web',"https://www.apenfe.es" );
$migas->addMiga('bropincel',"https://www.bropincel.es" );
echo $migas->showMigas();


