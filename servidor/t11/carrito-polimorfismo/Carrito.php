<?php

class Carrito
{
    private $productos = [];

    public function meter($producto)
    {
        $this->productos[] = $producto;
    }

    public function mostrar()
    {
        $total = 0;
        $totaIva = 0;
        echo "<div class='carrito'>";
        foreach ($this->productos as $producto) {
            echo "<article class='lineacarrito'>";
            echo $producto->mostrar();
            echo "</article>";
            $total += $producto->precio();
            $totaIva += $producto->precioIva();
        }
        echo "<div class='totalcarrito'>Total: $total Total con IVA: $totaIva </div>";
        echo "</div>";
    }
}
