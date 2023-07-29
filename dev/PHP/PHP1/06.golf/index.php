<?php

//autoload
require 'vendor/autoload.php';
// 1
// Est-ce qu'on a une route de demander
// importer le routing
require 'config/routing.php';

// Usage de Session_custom
require_once 'helpers/Session.php';
// Start session
Session::start();

// dump($_SESSION);
// REQUEST_URI(request) / QUERY_STRING(params) / SCRIPT_NAME(file exe) / DOCUMENT_ROOT (root dir)
// dump($_SERVER);

// ========================= ROUTING de Pompier ==========================/
// Mise en place du routing
// Route reçu dans le $_GET['page']  => 'index.php?page=login'
// Parse Le $_GET, pour obtenir la route à prendre
// Todo Check !route_exist in page
if (array_key_exists('page', $_GET) && !empty($_GET['page'])) {
    // On construit le chemin vers le répertoire '/controllers'
    $controllersBasePath = 'controllers/';
    // On récupère les routes potentielles
    $availableRouteNames = array_keys(AVAILABLE_ROUTES);
    // Si la page n'existe pas, on va à la page d'accueil
    if (!in_array($_GET['page'], $availableRouteNames)) {
        // On aurai pu partir vers une page 404, étant donnée que celle demande n'existe pas
        return realpath($controllersBasePath . DEFAULT_ROUTE);
    }
    // Access To Ctrl
    require realpath($controllersBasePath . AVAILABLE_ROUTES[$_GET['page']]);
    exit;
} else {
    $template = 'home';
    require 'layout.phtml';
}
// ========================= ROUTING ==========================/
