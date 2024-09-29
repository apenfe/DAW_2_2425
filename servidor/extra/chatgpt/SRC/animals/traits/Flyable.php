<?php

namespace chatgpt\SRC\animals\traits;

trait Flyable {

    public function fly(): void {
        echo "{$this->getName()} está volando.<br>";
    }

}
