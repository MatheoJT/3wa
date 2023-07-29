<?php

// C - Controller
// 3
// test Post for insert or delete
if (isset($_POST) && !empty($_POST)) {
    require "./helpers/FormValidator.php";
    // Empty fields
    if (!FormValidator::isEmpty($_POST)) {
        // Extraction du post
        extract($_POST);
        // Check name
        if (FormValidator::checkStringMaxLength($name, 30)) {
            // Check Email
            if (FormValidator::checkEmail($email)) {
                // Check pwd
                if (FormValidator::checkStringMinLength($password, 6)) {
                    require 'models/UserModel.php';
                    $userM = new UserModel();
                    // Check if user exist
                    $user = $userM->findByEmail($email);
                    // Check
                    if (!$user) {
                        // Hashage pwd
                        $passwordHashed = password_hash($password, PASSWORD_DEFAULT);
                        // Test si dirthdate field exist
                        $userM->insert($name, $email, $passwordHashed);
                        // Notif
                        Session::setNotif('L\'utilisateur a été enregistré avec succès');
                        // Rdir
                        header('Location: index.php?page=login');
                        exit;
                    } else Session::setError('Un utilisateur existe déjà avec cet email');
                } else Session::setError('Le champ password est trop court');
            } else Session::setError('Le champ email n\'est pas valide');
        } else Session::setError('Le champ name est trop long');
    }
}

// Redirect to form
$template = 'register';
include 'layout.phtml';
