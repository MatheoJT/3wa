<?php

// C - Controller
// 3
// Suis-je connecté
if (Session::isConnected()) {

    // test Post for insert or delete
    if (isset($_POST) && !empty($_POST)) {
        // Check Empty fields
        foreach ($_POST as $attrName => $field) {
            if (empty($field)) {
                Session::setError('Il y un champ vide');
            }
        }
        if (empty(Session::getError())) {
            // Extraction du post
            extract($_POST); // $title, $content
            //     // Check pwd
            if (strlen($title) >= 10) {
                if (strlen($content) >= 50) {
                    // Call Modeluser
                    require 'models/PostModel.php';
                    $postM = new PostModel();
                    // Check if user exist
                    $post = $postM->findByTitle($title);
                    // Check
                    if (!$post) {
                        // Insert
                        // Check content
                        $postM->insert(htmlspecialchars($title), htmlspecialchars($content), (int) Session::getLogged()['id']);
                        // Notif
                        Session::setNotif('Post créé avec succès');
                        // Rdir
                        header('Location: index.php');
                        exit;
                    } else Session::setError('Un post exixte déjà à ce sujet, plaggia !!');
                } else Session::setError('Le contenu du post n\'est pas assez long');
            } else Session::setError('Titre pas assez PutaClick, demande à CharGpt ;-) ');
        }
    }
    // Affichage du template
    $template = 'post_add';
    include 'layout.phtml';
} else {
    // Redirection Login
    header('Location: index.php?page=login');
    exit;
}
