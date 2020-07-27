<?php
/**
 * La configuration de base de votre installation WordPress.
 *
 * Ce fichier contient les réglages de configuration suivants : réglages MySQL,
 * préfixe de table, clés secrètes, langue utilisée, et ABSPATH.
 * Vous pouvez en savoir plus à leur sujet en allant sur
 * {@link http://codex.wordpress.org/fr:Modifier_wp-config.php Modifier
 * wp-config.php}. C’est votre hébergeur qui doit vous donner vos
 * codes MySQL.
 *
 * Ce fichier est utilisé par le script de création de wp-config.php pendant
 * le processus d’installation. Vous n’avez pas à utiliser le site web, vous
 * pouvez simplement renommer ce fichier en "wp-config.php" et remplir les
 * valeurs.
 *
 * @package WordPress
 */

// ** Réglages MySQL - Votre hébergeur doit vous fournir ces informations. ** //
/** Nom de la base de données de WordPress. */
define('DB_NAME', 'bulb');

/** Utilisateur de la base de données MySQL. */
define('DB_USER', 'bulb');

/** Mot de passe de la base de données MySQL. */
define('DB_PASSWORD', 'bulb');

/** Adresse de l’hébergement MySQL. */
define('DB_HOST', 'localhost');

/** Jeu de caractères à utiliser par la base de données lors de la création des tables. */
define('DB_CHARSET', 'utf8');

/** Type de collation de la base de données.
  * N’y touchez que si vous savez ce que vous faites.
  */
define('DB_COLLATE', '');

/**#@+
 * Clés uniques d’authentification et salage.
 *
 * Remplacez les valeurs par défaut par des phrases uniques !
 * Vous pouvez générer des phrases aléatoires en utilisant
 * {@link https://api.wordpress.org/secret-key/1.1/salt/ le service de clefs secrètes de WordPress.org}.
 * Vous pouvez modifier ces phrases à n’importe quel moment, afin d’invalider tous les cookies existants.
 * Cela forcera également tous les utilisateurs à se reconnecter.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'j>7_$pplDLJc(8,I4SINj9KlEP._><M,zLS;fdQ}_s!L-]nI5iBipbgTpTiHKuSE');
define('SECURE_AUTH_KEY',  's3|;[NU!PO^pVO-s+jASNkAOb^Ugr2V5D*zUk:bqpa:F`elY[-z^)-ar~NP/H%l:');
define('LOGGED_IN_KEY',    'ugWIGy6-J15swL=7G%+!e;M |u1MhK$YX,/g;.w1-j;{6J$END)NQMrBjqL$!#k#');
define('NONCE_KEY',        '=8DeKDz`q,ni|n!_:LM#hQd_,x.}X0F+*kfi[(::a4:E;h&%6!+MzN.0kReJ_(`L');
define('AUTH_SALT',        '$8Py|5*)/n|fsFs %wqjU[+Y`o]1Kiz!!j..nN6n|H`Y)(pKi[M5yT+{ZIS _Lk<');
define('SECURE_AUTH_SALT', ']*T!.++`(+D840;61Zrh+|LCPpb[x?XaA0SYbMl[xLz3>:M|Ac@4u#gq_~x:[?2t');
define('LOGGED_IN_SALT',   'I}VxvD[1ABwN#a4bD(,Z_s`NJb]$Di|;]3<04Sz5|coN-%49:oIgoLY?gtxG*dnW');
define('NONCE_SALT',       'DxJ{seE!u1:hx4EcSe^ObFFArt~B-#ltMM0A_9T@.[: g~82iJ?366|kx5`,aU&t');
/**#@-*/

/**
 * Préfixe de base de données pour les tables de WordPress.
 *
 * Vous pouvez installer plusieurs WordPress sur une seule base de données
 * si vous leur donnez chacune un préfixe unique.
 * N’utilisez que des chiffres, des lettres non-accentuées, et des caractères soulignés !
 */
$table_prefix  = 'wp_';

/**
 * Pour les développeurs : le mode déboguage de WordPress.
 *
 * En passant la valeur suivante à "true", vous activez l’affichage des
 * notifications d’erreurs pendant vos essais.
 * Il est fortemment recommandé que les développeurs d’extensions et
 * de thèmes se servent de WP_DEBUG dans leur environnement de
 * développement.
 *
 * Pour plus d’information sur les autres constantes qui peuvent être utilisées
 * pour le déboguage, rendez-vous sur le Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* C’est tout, ne touchez pas à ce qui suit ! */

/** Chemin absolu vers le dossier de WordPress. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Réglage des variables de WordPress et de ses fichiers inclus. */
require_once(ABSPATH . 'wp-settings.php');
