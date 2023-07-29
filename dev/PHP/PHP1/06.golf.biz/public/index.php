<?php include '../elements/header.php'; ?>


    <?php

    require '../vendor/autoload.php';

    $uri = $_SERVER['REQUEST_URI'];
    $router = new AltoRouter();

    $router->map('GET', '/', '../views/home.phtml', 'home');
    $router->map('GET', '/login', '../views/login.phtml', 'login');
    $router->map('GET', '/register', '../views/register.phtml', 'register');
    $router->map('GET', '/contact', '../views/contact.phtml', 'contact');
    $router->map('GET', '/account', '../views/account.phtml', 'account');
    $router->map('GET', '/dashboard', '../views/dashboard.phtml', 'dashboard');

    $match = $router->match();

    if ($match) {
        if (is_callable($match['target'])) {
            call_user_func($match['target'], $match['params']);
        } else require $match['target'];
    } else {
        require '../views/404.phtml';
    }
    ?>


<?php include '../elements/footer.php'; ?>

