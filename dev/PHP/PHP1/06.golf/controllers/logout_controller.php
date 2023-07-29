<?php

// Check Logout
if (
    array_key_exists('page', $_GET) && $_GET['page'] === 'logout'
) {
    Session::destroyUser();
    Session::setNotif('Vous avez été déconnecté avec succès');
    header('Location: index.php');
    exit;
}
