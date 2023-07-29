<?php

declare(strict_types=1);

require_once 'DB.php';

class PostModel extends DB
{
    // C`RUD`
    public function insert(string $title, string $content, int $user_id): void
    {
        $q = $this->getPdo()->prepare(
            'INSERT INTO post (title, content, created_at, user_id)
            VALUES (:title, :content, NOW(), :user)'
        );
        $q->execute([
            'title' => $title,
            'content' => $content,
            'user' => $user_id
        ]);
    }

    public function delete(int $id): void
    {
        $q = $this->getPdo()->prepare(
            'DELETE FROM post
            WHERE id = :id'
        );
        $q->execute(['id' => $id]);
    }

    public function update(int $id, array $fields): void
    {
        $q = $this->getPdo()->prepare(
            'UPDATE post SET
            title = :title,
            content = :content
            WHERE id = :id'
        );
        $q->execute([
            'id' => $id,
            'title' => htmlspecialchars($fields['title']),
            'content' => htmlspecialchars($fields['content'])
        ]);
    }

    // `C`RUD
    public function findByTitle(string $title): bool|array
    {
        $q = $this->getPdo()->prepare('SELECT id FROM post WHERE title = :title');
        $q->execute(['title' => $title]);
        return $q->fetch();
    }

    public function findById(int $id): bool|array
    {
        $q = $this->getPdo()->prepare('SELECT id FROM post WHERE id = :id');
        $q->execute(['id' => $id]);
        return $q->fetch();
    }

    public function findLatest(): bool|array
    {
        $q = $this->getPdo()->query(
            'SELECT p.id, p.title, p.content, p.created_at, u.name FROM post p
            INNER JOIN user u ON u.id = p.user_id
            ORDER BY p.created_at DESC
            LIMIT 1'
        );
        return $q->fetch();
    }

    public function findAll(): bool|array
    {
        // TODO Affichage de tous les posts meme si plus de user
        $q = $this->getPdo()->query(
            'SELECT p.id, p.title, p.content, p.created_at, u.name FROM post p
            INNER JOIN user u ON u.id = p.user_id
            ORDER BY p.created_at'
        );
        return $q->fetchAll();
    }

    public function findOneByUser(int $postId): bool|array
    {
        $q = $this->getPdo()->prepare('SELECT * FROM post WHERE post_id = :postId');
        $q->execute(['postId' => $postId]);
        return $q->fetch();
    }

    public function findAllByUser(int $user_id): bool|array
    {
        $q = $this->getPdo()->prepare('SELECT * FROM post WHERE user_id = :user');
        $q->execute(['user' => $user_id]);
        return $q->fetchAll();
    }

    private function countNbPostY(): bool|array
    {
        $q = $this->getPdo()->query(
            'SELECT count(id) as count FROM post WHERE YEAR(created_at) = YEAR(NOW())'
        );
        return $q->fetch();
    }

    private function countNbPostM(): bool|array
    {
        $q = $this->getPdo()->query(
            'SELECT count(id) as count FROM post WHERE MONTH(created_at) = MONTH(NOW())'
        );
        return $q->fetch();
    }

    public function getStats(): array
    {
        return [
            'countNbPostY' => $this->countNbPostY(),
            'countNbPostM' => $this->countNbPostM()
        ];
    }
}
