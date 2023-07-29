<?php

$dsn = 'mysql:host=localhost;dbname=user_auth;port=3306';
$user = 'root';
$password = '';

$pdo = new PDO(
    $dsn,
    $user,
    $password,
    [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
    ]
);
