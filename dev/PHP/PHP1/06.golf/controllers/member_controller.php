<?php

// C - Controller
// 3

// Check if Auth
// Suis-je connecté
if (Session::isConnected()) {
    // Get User infos
    // Call Modeluser
    require 'models/UserModel.php';
    $userM = new UserModel;
    // Check if user exist
    $user = $userM->findById((int) Session::getLogged()['id']);
    require 'models/PostModel.php';
    $postM = new PostModel;
    // Get them posts
    $posts = $postM->findAllByUser((int) Session::getLogged()['id']);

    // Affichage du template
    $template = 'member';
    include 'layout.phtml';
} else {
    // Redirection Login
    header('Location: index.php?page=login');
    exit;
}
