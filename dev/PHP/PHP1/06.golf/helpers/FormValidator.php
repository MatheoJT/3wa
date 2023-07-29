<?php

declare(strict_types=1);

class FormValidator
{
    /**
     * Check Empty
     *
     * @param array $form
     * @return boolean
     */
    public static function isEmpty(array $form): bool
    {
        // On par du princice que c'est pas un gogole
        foreach ($form as $attrName => $field) {
            if (empty($field)) {
                Session::setError("Le champs `$attrName` est vide");
                return true;
            }
        }
        return false;
    }

    /**
     * Check Email
     *
     * @param string $mail
     * @return boolean
     */
    public static function checkEmail(string $mail): bool
    {
        if (!filter_var($mail, FILTER_VALIDATE_EMAIL)) {
            return false;
        }

        return true;
    }

    /**
     * Check if string length is higher than
     *
     * @param string $name
     * @param integer $min
     * @return boolean
     */
    public static function checkStringMinLength(string $name, int $min): bool
    {
        if (strlen($name) < $min) {
            return false;
        }

        return true;
    }

    /**
     * Check if string length if smaller than
     *
     * @param string $name
     * @param integer $max
     * @return boolean
     */
    public static function checkStringMaxLength(string $name, int $max): bool
    {
        if (strlen($name) > $max) {
            return false;
        }

        return true;
    }

    /**
     * Check if password match with hash
     *
     * @param string $pwd
     * @param string $hash
     * @return boolean
     */
    public static function passwordMatch(string $pwd, string $hash): bool
    {
        if (!password_verify($pwd, $hash)) {
            return false;
        }

        return true;
    }

    /**
     * Check string pattern : 6 chars min
     * Rappel : 1 majuscule - 1 minuscule - 1 chiffre
     *
     * @param [type] $pwd
     * @return boolean
     */
    public static function checkPwdFormat($pwd): bool
    {
        // src regex : https://regex101.com/r/fX8dY0/1
        if (!preg_match('/^((?:(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*)).{6,}$/', $pwd)) {
            return false;
        }

        return true;
    }
}
