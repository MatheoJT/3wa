<?php



require_once './lib/DatabaseConnector.php';


if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    

    $db = new DatabaseConnector();
    $db->persistUser($name, $email, $password, $birthdate);
    exit;
}
