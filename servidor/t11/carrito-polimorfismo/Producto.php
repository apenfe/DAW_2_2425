<?php

class Producto
{
    private $nombre;
    private $precio;
    private $iva;
    private $cantidad = 1;

    public function mostrar()
    {
        return "<p>$this->nombre Precio: $this->precio € IVA: $this->iva %</p>";
    }

    public function precio()
    {
        return $this->precio;
    }

    public function precioIva()
    {
        return $this->precio * (1 + $this->iva / 100);
    }

    public function __construct($nombre, $precio, $iva = 21)
    {
        $this->nombre = $nombre;
        $this->precio = $precio;
        $this->iva = $iva;
    }
}
