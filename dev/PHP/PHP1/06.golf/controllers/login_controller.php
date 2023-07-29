<?php

// C - Controller
// 3
// test Post for insert or delete
if (isset($_POST) && !empty($_POST)) {
    require 'helpers/FormValidator.php';
    // Empty fields
    if (!FormValidator::isEmpty($_POST)) {
        // Extraction du post
        extract($_POST); // $email, $password
        // Check email
        if (FormValidator::checkEmail($email)) {
            // Check pwd
            if (FormValidator::checkStringMinLength($password, 6)) {
                // Call Modeluser
                require 'models/UserModel.php';
                $userM = new UserModel();
                // Check if user exist
                $user = $userM->findByEmail($email);
                // Check
                if ($user) {
                    // Check password
                    if (FormValidator::passwordMatch($password, $user['password'])) {
                        // Go to session
                        Session::init((int) $user['id'], $user['name'], $email, $user['role_id'] === 1 ? 'USER' : 'ADMIN');
                        // Notif
                        Session::setNotif('Connexion avec succès');
                        // Rdir
                        header('Location: index.php');
                        exit;
                    } else Session::setError('Mot de pass incorrect');
                } else Session::setError('Aucun utilisateur n\'existe avec cet email');
            } else Session::setError('Mot de pass trop court');
        } else Session::setError('Email incorrect');
    }
}

// Affichage du template
$template = 'login';
include 'layout.phtml';
