<?php

declare(strict_types=1);

require_once 'DB.php';

class AdminModel extends DB {

    public function remove(int $id): void
    {
        $q = $this->getPdo()->prepare(
            'DELETE FROM user
            WHERE id = :id'
        );
        $q->execute(['id' => $id]);
    }

    public function update(int $id, array $fields): void
    {
        // Extract
        extract($fields);

        $q = $this->getPdo()->prepare(
            'UPDATE user SET
            name = :name,
            password = :pwd,
            email = :email
            WHERE id = :id'
        );
        $q->execute([
            'id'    => $id,
            'name'  => $name,
            'email' => $email,
            'pwd'   => $password
        ]);
    }

    public function findAll(): bool|array
    {
        $q = $this->getPdo()->prepare('SELECT id, name, email, created_at, role_id FROM user');
        $q->execute();
        return $q->fetchAll();
    }

    public function findById(int $id): bool|array
    {
        $q = $this->getPdo()->prepare('SELECT id, name, email, created_at, role_id FROM user WHERE id = :id');
        $q->execute(['id' => $id]);
        return $q->fetch();
    }

    public function showBackOffice(): void
    {
        $users = $this->findAll();
        require_once 'views/admin.php';
    }

    public function insert(string $name, string $email, string $passwordHashed): void
    {
        $q = $this->getPdo()->prepare(
            'INSERT INTO user (name, email, password, created_at)
            VALUES (:name, :email, :password, NOW())'
        );
        $q->execute([
            'name' => $name,
            'email' => $email,
            'password' => $passwordHashed
        ]);
    }

}