<?php

// Etablir une connexion à la bdd => PDO
$dsn = 'mysql:host=localhost;dbname=classicmodels;port=3306';
$user = 'root';
$password = '';

$pdo = new PDO($dsn, $user, $password);
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
$pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_OBJ);