<?php

namespace SRC\animals\traits;

trait Flyable {

    public function fly() {
        echo "{$this->getName()} está volando.<br>";
    }

}
