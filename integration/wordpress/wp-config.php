<?php
/**
 * La configuration de base de votre installation WordPress.
 *
 * Ce fichier est utilisé par le script de création de wp-config.php pendant
 * le processus d’installation. Vous n’avez pas à utiliser le site web, vous
 * pouvez simplement renommer ce fichier en « wp-config.php » et remplir les
 * valeurs.
 *
 * Ce fichier contient les réglages de configuration suivants :
 *
 * Réglages MySQL
 * Préfixe de table
 * Clés secrètes
 * Langue utilisée
 * ABSPATH
 *
 * @link https://fr.wordpress.org/support/article/editing-wp-config-php/.
 *
 * @package WordPress
 */

// ** Réglages MySQL - Votre hébergeur doit vous fournir ces informations. ** //
/** Nom de la base de données de WordPress. */
define( 'DB_NAME', 'wordpress' );

/** Utilisateur de la base de données MySQL. */
define( 'DB_USER', 'root' );

/** Mot de passe de la base de données MySQL. */
define( 'DB_PASSWORD', '' );

/** Adresse de l’hébergement MySQL. */
define( 'DB_HOST', 'localhost' );

/** Jeu de caractères à utiliser par la base de données lors de la création des tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/**
 * Type de collation de la base de données.
 * N’y touchez que si vous savez ce que vous faites.
 */
define( 'DB_COLLATE', '' );

/**#@+
 * Clés uniques d’authentification et salage.
 *
 * Remplacez les valeurs par défaut par des phrases uniques !
 * Vous pouvez générer des phrases aléatoires en utilisant
 * {@link https://api.wordpress.org/secret-key/1.1/salt/ le service de clés secrètes de WordPress.org}.
 * Vous pouvez modifier ces phrases à n’importe quel moment, afin d’invalider tous les cookies existants.
 * Cela forcera également tous les utilisateurs à se reconnecter.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '^5g0;wHVU+2W@FI<quuP3Y_.s+NkauJz1m[Tj&_DeW=(NL$nmOD.rP~|TH+w[0i(' );
define( 'SECURE_AUTH_KEY',  'o<JDQqF3XU:hw%3*+K&Q]=LHY*0F)@_1#skTrzM$;Idm.NAJPx!n[{Dn9uFDq[&,' );
define( 'LOGGED_IN_KEY',    'm4sn#r_bg&FWZ4VmEG#~7v+AsI+qU6ihcn^@ j=:[W=D^^L<U,?WCO*2RNC})u7w' );
define( 'NONCE_KEY',        '?TB|g7F$YvBLO&lZI@)f.&Pf2`;9e2v.6_t!.H2G|dt&rf/OEN?V&Er/<&&TNzOq' );
define( 'AUTH_SALT',        '!!mg^1*j`r^Ked,{w[&/xV*Ll}WtG4s|xj=3Y|ZIwX;h^1M^_z#9S!GUE~YfB-(K' );
define( 'SECURE_AUTH_SALT', 'MT(5BEt#c^=X*AD$t5dm-ehMJTN %N=_Ari#4P?M?1P97/(Cl!>O>vPnsw)G6h0q' );
define( 'LOGGED_IN_SALT',   'quyF,+r}tNxxmp9<Z>pI-~*r5w0y^+,J6:@Sf1-D6!4EzPbtG9Ms[rJ5?]#2fX=X' );
define( 'NONCE_SALT',       '[Pd ^MvApWel?XL~M)Bpd6]]0:UP}W){/BACnLTGp&$=@+27#o>XQmgZV0]x}6Y7' );
/**#@-*/

/**
 * Préfixe de base de données pour les tables de WordPress.
 *
 * Vous pouvez installer plusieurs WordPress sur une seule base de données
 * si vous leur donnez chacune un préfixe unique.
 * N’utilisez que des chiffres, des lettres non-accentuées, et des caractères soulignés !
 */
$table_prefix = 'wp_';

/**
 * Pour les développeurs : le mode déboguage de WordPress.
 *
 * En passant la valeur suivante à "true", vous activez l’affichage des
 * notifications d’erreurs pendant vos essais.
 * Il est fortement recommandé que les développeurs d’extensions et
 * de thèmes se servent de WP_DEBUG dans leur environnement de
 * développement.
 *
 * Pour plus d’information sur les autres constantes qui peuvent être utilisées
 * pour le déboguage, rendez-vous sur le Codex.
 *
 * @link https://fr.wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* C’est tout, ne touchez pas à ce qui suit ! Bonne publication. */

/** Chemin absolu vers le dossier de WordPress. */
if ( ! defined( 'ABSPATH' ) )
  define( 'ABSPATH', dirname( __FILE__ ) . '/' );

/** Réglage des variables de WordPress et de ses fichiers inclus. */
require_once( ABSPATH . 'wp-settings.php' );
