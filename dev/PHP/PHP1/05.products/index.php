<?php

declare(strict_types=1);

$notif = null;
$error = null;

include 'cnx.php';

// Traitement si post (existant et non-vide)
if (isset($_POST) && !empty($_POST)) {
    // Récupération des données du formulaire
    $name = $_POST['name'] ?? '';
    $description = $_POST['description'] ?? '';
    $pha = $_POST['pha'] ?? '';
    $photo = $_FILES['photo']['name'] ?? '';

    // Validation des données
    if (empty($name)) {
        $error = 'Name is missing';
    } elseif (empty($description)) {
        $error = 'Description is missing';
    } elseif (empty($pha)) {
        $error = 'PHA is missing';
    } elseif (empty($photo)) {
        $error = 'Photo is missing';
    } else {
        // Préparation de la requête SQL
        $query = 'INSERT INTO product (name, description, price, picture)
                VALUES (:name, :description, :price, :picture)';

        // Exécution de la requête
        $statement = $pdo->prepare($query);
        $statement->bindValue(':name', $name, PDO::PARAM_STR);
        $statement->bindValue(':description', $description, PDO::PARAM_STR);
        $statement->bindValue(':price', $pha, PDO::PARAM_STR);
        $statement->bindValue(':picture', $photo, PDO::PARAM_STR);
        $statement->execute();

        // Notification de succès
        $notif = 'Product added successfully';

        // Reset des données du formulaire
        $name = '';
        $description = '';
        $pha = '';
        $photo = '';
    }
}

// Affichage
include 'index.phtml';

?>