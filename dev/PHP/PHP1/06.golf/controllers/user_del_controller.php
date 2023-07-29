<?php

// C - Controller
// 3
// Suis-je connecté
if (Session::isConnected()) {
    // Call Modeluser
    require 'models/UserModel.php';
    $userM = new UserModel();
    // Suppression du compte
    $userM->delete(Session::getLogged()['id']);
    // Logout
    Session::destroyUser();

    Session::setNotif('Votre compte a bien été supprimé');
    header('Location: index.php');
    exit;
} else {
    // Redirection Login
    header('Location: index.php?page=login');
    exit;
}
