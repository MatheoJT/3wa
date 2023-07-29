<?php
// On reçoit les données du POST dans `$_POST`
// var_dump($_POST);

// liste des champs autorisés : field_name, field_email,field_pwd,field_radio,field_checkbox
$inputsAllowed = ['field_name', 'field_email', 'field_pwd', 'field_radio', 'field_checkbox', 'field_select'];

// Vérifier si on a bien le nombre de champs attendu
// On traitera ici les données pour vérifier si on peut les exploiter
if (count($_POST) === 6) {
    // Vérif
    extract($_POST);
    // die;
} else
    $error = 'Merci de remplir correctement les champs';

// Puis on renverra celle-ci dans la page afin de les afficher
include 'form.phtml';
