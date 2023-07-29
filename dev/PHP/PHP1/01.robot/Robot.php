<?php
class Robot {
   
    private $name;

    public function getName(){
        return $this->name = chr(rand(65, 90)) .chr(rand(65, 90)) ."-" .rand(1000, 9999);
    }

    public function getDate(){
        return date("d m Y");
    }

    public function getTime(){
        return date("H:i:s");
    }

    public function getRandomNumber(){
        return rand(1, 10);
    }

    public function getOddEven($randomNumber){
        return $randomNumber % 2 == 0 ? "pair" : "impair";
    }

    public function getReverseName(){
        return strrev($this->name);
    }

    public function getExtermination(){
        return rand(1, 3) == 1 ? "Extermination ! Extermination !" : "Vous voulez un café ?";
    }

}


?>