<?php

// 2
// Définition des routes de l'application
// Une 'route' est associée à un 'contrôleur' et à une 'vue'
define('AVAILABLE_ROUTES', [
    'home'          => 'home_controller.php',
    'blog'          => 'blog_controller.php',
    'login'         => 'login_controller.php',
    'register'      => 'register_controller.php',
    'member'        => 'member_controller.php',
    'logout'        => 'logout_controller.php',
    'user_del'      => 'user_del_controller.php',
    'user_edit'     => 'user_edit_controller.php',
    'bo'            => 'bo_controller.php',
    'admin_user_del' => 'admin_user_del_controller.php',
    'admin_post_del' => 'admin_post_del_controller.php',
    'post_add'      => 'post_add_controller.php',
    'post_del'      => 'post_del_controller.php',
    'contact'       => 'contact_controller.php'
]);

define('DEFAULT_ROUTE', AVAILABLE_ROUTES['home']);
