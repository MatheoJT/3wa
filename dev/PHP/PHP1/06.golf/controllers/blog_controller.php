<?php

// C - Controller
// 3
require 'models/PostModel.php';
$postM = new PostModel;
$posts = $postM->findAll();

$template = 'blog';
include 'layout.phtml';
