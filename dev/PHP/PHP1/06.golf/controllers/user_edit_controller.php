<?php

// C - Controller
// 3
// Suis-je connecté, y a t'il un post, contient'il mes 3 champs
if (Session::isConnected()) {
    require 'helpers/FormValidator.php';
    require 'models/UserModel.php';
    $userM = new UserModel();
    if (!FormValidator::isEmpty($_POST) && count($_POST) === 3) {
        // Extraction du post
        extract($_POST);
        if (FormValidator::checkStringMaxLength($name, 30)) {
            // Check Email
            if (FormValidator::checkEmail($email)) {
                // Check pwd
                if (FormValidator::checkStringMinLength($password, 6)) {
                    // Hashage pwd
                    $_POST['name'] = htmlspecialchars($name);
                    $_POST['email'] = htmlspecialchars($email);
                    $_POST['password'] = password_hash($password, PASSWORD_DEFAULT);
                    // Upd
                    $userM->update((int) Session::getLogged()['id'], $_POST);
                    // Notif
                    Session::setNotif('Votre compte a bien été édité');
                    // RedirectTo
                    header('Location: index.php?page=member');
                    exit;
                } else Session::setError('Le champ password est trop court');
            } else Session::setError('Le champ email n\'est pas valide');
        } else Session::setError('Le champ name est trop long');
    }
    $user = $userM->findById((int) Session::getLogged()['id']);
    // Redirect to home
    $template = 'user_edit';
    include 'layout.phtml';
} else {
    // Redirection Login
    header('Location: index.php?page=login');
    exit;
}
