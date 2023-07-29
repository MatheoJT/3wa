<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        *, *:before, *:after {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        html, body {
            height: 100%;
        }

        body:before, body:after {
            content: "";
            display: block;
            height: 3%;
            background: #00bdea;
        }
        body:after {
            background: #5efa97;
            height: 100%;
        }

        /* MAIN VARIABLES FOR CUSTOMIZATION */
        /* -------------------------------- */

        a {
            text-decoration: none;
            color: #000;
        }

        h1 {
            font-family: Bahnschrift, Arial, sans-serif;
            padding-left: 50px;
            margin: 10px;
        }

        .nav {
            overflow: hidden;
            position: absolute;
            left: 50%;
            top: 5%;
            width: auto;
            height: 90px;
            margin-top: -45px;
            background: #fff;
            border-radius: 5px;
            transform: translate3d(-50%, 0, 0);
            box-shadow: 0 10px 35px rgba(0, 0, 0, 0.2);
        }
        .nav__cb {
            z-index: -1000;
            position: absolute;
            left: 0;
            top: 0;
            opacity: 0;
            pointer-events: none;
        }
        .nav__content {
            position: relative;
            width: 90px;
            height: 100%;
            transition: width 1s cubic-bezier(0.49, -0.3, 0.68, 1.23);
        }
        .nav__cb:checked ~ .nav__content {
            transition: width 1s cubic-bezier(0.48, 0.43, 0.29, 1.3);
            width: 700px;
        }
        .nav__items {
            position: relative;
            width: 700px;
            height: 100%;
            padding-left: 20px;
            padding-right: 110px;
            list-style-type: none;
            font-size: 0;
        }
        .nav__item {
            display: inline-block;
            vertical-align: top;
            width: 70px;
            text-align: center;
            color: #6C7784;
            font-size: 14px;
            line-height: 90px;
            font-family: Helvetica, Arial, sans-serif;
            font-weight: bold;
            perspective: 1000px;
            transition: color 0.3s;
            cursor: pointer;
        }
        .nav__item:hover {
            color: #00bdea;
        }
        .nav__item-text {
            display: block;
            height: 100%;
            transform: rotateY(-70deg);
            opacity: 0;
            transition: transform 0.7s cubic-bezier(0.48, 0.43, 0.7, 2.5), opacity 0.7s;
        }
        .nav__cb:checked ~ .nav__content .nav__item-text {
            transform: rotateY(0);
            opacity: 1;
            transition: transform 0.7s cubic-bezier(0.48, 0.43, 0.7, 2.5), opacity 0.2s;
        }
        .nav__item:nth-child(1) .nav__item-text {
            transition-delay: 0.3s;
        }
        .nav__cb:checked ~ .nav__content .nav__item:nth-child(1) .nav__item-text {
            transition-delay: 0s;
        }
        .nav__item:nth-child(2) .nav__item-text {
            transition-delay: 0.2s;
        }
        .nav__cb:checked ~ .nav__content .nav__item:nth-child(2) .nav__item-text {
            transition-delay: 0.1s;
        }
        .nav__item:nth-child(3) .nav__item-text {
            transition-delay: 0.1s;
        }
        .nav__cb:checked ~ .nav__content .nav__item:nth-child(3) .nav__item-text {
            transition-delay: 0.2s;
        }
        .nav__item:nth-child(4) .nav__item-text {
            transition-delay: 0s;
        }
        .nav__cb:checked ~ .nav__content .nav__item:nth-child(4) .nav__item-text {
            transition-delay: 0.3s;
        }
        .nav__item:nth-child(5) .nav__item-text {
            transition-delay: 0.1s;
        }
        .nav__cb:checked ~ .nav__content .nav__item:nth-child(5) .nav__item-text {
            transition-delay: 0.2s;
        }
        .nav__item:nth-child(6) .nav__item-text {
            transition-delay: 0.2s;
        }
        .nav__cb:checked ~ .nav__content .nav__item:nth-child(6) .nav__item-text {
            transition-delay: 0.1s;
        }
        .nav__btn {
            position: absolute;
            right: 0;
            top: 0;
            width: 90px;
            height: 90px;
            padding: 36px 31px;
            cursor: pointer;
        }
        .nav__btn:before, .nav__btn:after {
            content: "";
            display: block;
            width: 28px;
            height: 4px;
            border-radius: 2px;
            background: #096DD3;
            transform-origin: 50% 50%;
            transition: transform 1s cubic-bezier(0.48, 0.43, 0.29, 1.3), background-color 0.3s;
        }
        .nav__btn:before {
            margin-bottom: 10px;
        }
        .nav__btn:hover:before, .nav__btn:hover:after {
            background: #00bdea;
        }
        .nav__cb:checked ~ .nav__btn:before {
            transform: translateY(7px) rotate(-225deg);
        }
        .nav__cb:checked ~ .nav__btn:after {
            transform: translateY(-7px) rotate(225deg);
        }
    </style>
</head>
<body>
    <header>
        <h1>Golf</h1>
        <nav class="nav">
            <input type="checkbox" class="nav__cb" id="menu-cb"/>
            <div class="nav__content">
                <ul class="nav__items">
                    <li class="nav__item"><a href="/" class="nav__item-text">Home</a></li>
                    <li class="nav__item"><a href="/register" class="nav__item-text">Register</a></li>
                    <li class="nav__item"><a href="/login" class="nav__item-text">Login</a></li>
                    <li class="nav__item"><a href="/contact" class="nav__item-text">Contact</a></li>
                    <li class="nav__item"><a href="/account" class="nav__item-text">Account</a></li>
                    <li class="nav__item"><a href="/logout" class="nav__item-text">Logout</a></li>
                    <li class="nav__item"><a href="/dashboard" class="nav__item-text">Dashboard</a></li>
                </ul>
            </div>
            <label class="nav__btn" for="menu-cb"></label>
        </nav>
  </header>
  <div>