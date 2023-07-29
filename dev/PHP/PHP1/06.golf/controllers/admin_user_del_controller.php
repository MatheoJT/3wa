<?php

// C - Controller
// 3
// Suis-je connecté
if (Session::isAdmin()) {
    if (isset($_GET['userId']) && !empty($_GET['userId']) && is_int((int) $_GET['userId'])) {
        require 'models/UserModel.php';
        // require 'models/PostModel.php';
        $userM = new UserModel;
        // $postM = new PostModel;
        $user = $userM->findById((int) $_GET['userId']);
        // Check if exist
        if ($user) {
            $userM->delete($_GET['userId']);
            // Notif
            Session::setNotif('Un user vient d\'être supprimé avec succès');
        } else Session::setError('Echec de suppression : Le user n\'exite pas');
    } else Session::setError('Echec de suppression : Information manquante');

    // Redirection Login
    header('Location: index.php?page=bo');
    exit;
} else {
    // Redirection Login
    header('Location: index.php?page=login');
    exit;
}
