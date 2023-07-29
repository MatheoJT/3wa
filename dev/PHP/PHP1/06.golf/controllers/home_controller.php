<?php

// C - Controller
// 3

// Get post from user connected

require 'models/PostModel.php';

$postM = new PostModel;

$post = $postM->findLatest();
$template = 'home';
include_once 'layout.phtml';
