<?php

declare(strict_types=1);


abstract class DB
{
    // Controller
    private ?PDO $connexion;

    public function __construct()
    {
        $this->connexion = new PDO(
        "mysql:host=localhost;dbname=golf;charset=utf8",
        "root",
        "",
        [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
        ]
        );
    }

    protected function getPdo(): PDO
    {
        return $this->connexion;
    }
}
