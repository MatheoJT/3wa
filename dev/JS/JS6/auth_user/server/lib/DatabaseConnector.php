<?php

class DatabaseConnector {
    private $pdo;

    public function __construct() {
        // Connexion à la base de données
        $dsn = 'mysql:host=localhost;dbname=user_auth';
        $user = 'root';
        $password = '';

        $this->pdo = new PDO(
            $dsn,
            $user,
            $password,
            [
                PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
                PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
            ]
        );
    }


    public function persistUser($name, $email, $password, $birthdate) {
        // Verifier si l'email existe déjà
        $stmt = $this->pdo->prepare("SELECT * FROM users WHERE email = ?");
        if ($stmt->execute([$email])) {
            $user = $stmt->fetch();
            if ($user) {
                throw new Exception('Email already exists.');
            }
        }
        
        // Enregistrer l'utilisateur
        $stmt = $this->pdo->prepare("INSERT INTO users (name, email, password, birthdate) VALUES (?, ?, ?, ?)");
        $stmt->execute([$name, $email, password_hash($password, PASSWORD_BCRYPT), $birthdate]);
    }
}
