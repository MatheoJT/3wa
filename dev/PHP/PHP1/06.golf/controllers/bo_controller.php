<?php

// C - Controller
// 3
if (Session::isAdmin()) {
    require 'models/PostModel.php';
    $postM = new PostModel;
    $postStats = $postM->getStats();
    $posts = $postM->findAll();

    require 'models/UserModel.php';
    $userM = new UserModel;
    $userStats = $userM->getStats();
    $users = $userM->findAll();

    $template = 'bo';
    include 'layout.phtml';
} else {
    // Redirection Login
    header('Location: index.php?page=login');
    exit;
}
