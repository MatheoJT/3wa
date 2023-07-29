<?php

declare(strict_types=1);

require_once 'DB.php';

class HomeModel extends DB
{
    public function showHome(): void
    {
        $posts = $this->findAll();
        require_once 'views/home.php';
    }

    public function findAll(): bool|array
    {
        $q = $this->getPdo()->prepare('SELECT id, title, content, created_at, user_id FROM post');
        $q->execute();
        return $q->fetchAll();
    }

    public function showContact(): void
    {
        require_once 'views/contact.php';
    }


}