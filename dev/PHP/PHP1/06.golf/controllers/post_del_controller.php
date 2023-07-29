<?php

// C - Controller
// 3
// Suis-je connecté
if (Session::isConnected()) {
    dump($_GET['postId']);
    if (isset($_GET['postId']) && !empty($_GET['postId']) && is_int((int) $_GET['postId'])) {
        // Call ModelPost
        require 'models/PostModel.php';
        $postM = new PostModel();
        // Check if post exist
        $post = $postM->findById((int) $_GET['postId']);
        if ($post) {
            $postM->delete($_GET['postId']);
            // Notif
            Session::setNotif('Post supprimé avec succès');

            require 'models/UserModel.php';
            $userM = new UserModel;
            // Check if user exist
            $user = $userM->findById((int) Session::getLogged()['id']);
            // Get them posts
            $posts = $postM->findAllByUser((int) Session::getLogged()['id']);
        } else Session::setError('Echec de suppression : Le post n\'exite pas');
    }
    // Affichage du template
    $template = 'member';
    include 'layout.phtml';
} else {
    // Redirection Login
    header('Location: index.php?page=login');
    exit;
}
