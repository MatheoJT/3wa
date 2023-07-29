<?php

include("Robot.php");

$obj = new Robot();
$randomNumber = $obj->getRandomNumber();

echo "Salut, humain. Je suis " .$obj->getName() .".";
echo "<br>";
echo "Nous sommes le " .$obj->getDate() .", il est " .$obj->getTime() .".";
echo "<br>";
echo "J'ai choisi le nombre " .$randomNumber .". C'est un nombre " .$obj->getOddEven($randomNumber) .".";
echo "<br>";
echo "Mon nom à l'envers s'écrit " .$obj->getReverseName() .". Ah. Ah. Ah.";
echo "<br>";
echo $obj->getExtermination();

?>