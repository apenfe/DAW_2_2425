<?php

require_once 'Enlace.php';

class MigasPan
{
    public $migas = [];
    public $separador;

    public function __construct($separador = '>')
    {
        $this->separador = $separador;
    }

    public function addMiga($texto, $url = '') {
        $enlace = new Enlace($url, $texto);
        $this->migas[] = $enlace;
    }

    public function showMigas() {
        $html = '';
        foreach ($this->migas as $key => $miga) {

            if($key == count($this->migas)-1) {
                $html .= $miga->mostrar();
                break;
            }else{
                $html .= $miga->mostrar() ." ". $this->separador." ";
            }

        }

        return $html;
    }

}

$migas = new MigasPan();
$migas->addMiga('google',"https://www.google.es" );
$migas->addMiga('mi web',"https://www.apenfe.es" );
$migas->addMiga('bropincel',"https://www.bropincel.es" );
echo $migas->showMigas();
