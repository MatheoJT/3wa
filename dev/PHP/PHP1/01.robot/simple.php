<?php

$randomName = chr(rand(65, 90)) .chr(rand(65, 90)) ."-" .rand(1000, 9999);
$currentDate = date("d m Y");
$currentTime = date("H:i:s");
$randomNumber = rand(1, 10);

echo "Salut, humain. Je suis $randomName.";
echo "<br>";
echo "Nous sommes le $currentDate, il est $currentTime.";
echo "<br>";
echo "J'ai choisi le nombre $randomNumber. C'est un nombre ". ($randomNumber % 2 == 0 ? "pair" : "impair") .".";
echo "<br>";
echo "Mon nom à l'envers s'écrit " .strrev($randomName) .". Ah. Ah. Ah.";
echo "<br>";
echo rand(1, 3) == 1 ? "Extermination ! Extermination !" : "Vous voulez un café ?";

?>