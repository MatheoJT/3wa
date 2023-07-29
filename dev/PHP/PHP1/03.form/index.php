<?php

// Connexion si besoin !!!!
require 'cnx.php';

// Notifs
$error = null;
$notif = null;

// test Post for insert or delete
if (isset($_POST) && !empty($_POST)) {

}

// Affichage du template
include 'index.phtml';
