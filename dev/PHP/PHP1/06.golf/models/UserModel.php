<?php

declare(strict_types=1);

require_once 'DB.php';

class UserModel extends DB
{
    // `C` R `UD`
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

    public function delete(int $id): void
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

    // C `R` UD
    public function findByEmail(string $email): bool|array
    {
        $q = $this->getPdo()->prepare('SELECT id, name, password, created_at, role_id FROM user WHERE email = :mail');
        $q->execute(['mail' => $email]);
        return $q->fetch();
    }

    public function findAll(): bool|array
    {
        $q = $this->getPdo()->query('SELECT id, name, email FROM user');
        return $q->fetchAll();
    }

    public function findById(int $id): bool|array
    {
        $q = $this->getPdo()->prepare(
            'SELECT u.id, u.name, email, password, created_at, role_id, r.name as role_name
            FROM user u
            INNER JOIN role r ON r.id = u.role_id
            WHERE u.id = :id'
        );
        $q->execute(['id' => $id]);
        return $q->fetch();
    }

    private function countNbUserY(): bool|array
    {
        $q = $this->getPdo()->query(
            'SELECT count(id) as count FROM user WHERE YEAR(created_at) = YEAR(NOW())'
        );
        return $q->fetch();
    }

    private function countNbUserM(): bool|array
    {
        $q = $this->getPdo()->query(
            'SELECT count(id) as count FROM user WHERE MONTH(created_at) = MONTH(NOW())'
        );
        return $q->fetch();
    }

    public function getStats(): array
    {
        return [
            'countNbUserY' => $this->countNbUserY(),
            'countNbUserM' => $this->countNbUserM()
        ];
    }
}
