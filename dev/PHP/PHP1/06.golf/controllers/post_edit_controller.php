<?php

// C - Controller
// 3
// Suis-je connecté
if (Session::isConnected()) {
    require 'helpers/FormValidator.php';
    // Empty fields
    if (!FormValidator::isEmpty($_POST)) {
        // Extraction du post
        extract($_POST); // $title, $content
        //     // Check pwd
        if (FormValidator::checkStringMinLength($title, 10)) {
            if (FormValidator::checkStringMinLength($content, 50)) {
                // Call Modeluser
                require 'models/PostModel.php';
                $postM = new PostModel();
                // Check if user exist
                $post = $postM->findByName($title);
                // Check
                if (!$post) {
                    // Check content
                    $postM->update((int) Session::getLogged()['id'], $_POST);
                    // Notif
                    Session::setNotif('Post créé avec succès');
                    // Rdir
                    header('Location: index.php');
                    exit;
                } else Session::setError('Le post n\'existe pas');
            } else Session::setError('Le contenu du post n\'est pas assez long');
        } else Session::setError('Titre pas assez PutaClick, demande à CharGpt ;-) ');
    }
    // Affichage du template
    $template = 'add_post';
    include 'layout.phtml';
} else {
    // Redirection Login
    header('Location: index.php?page=login');
    exit;
}
