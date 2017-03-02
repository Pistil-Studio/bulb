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
define('DB_PASSWORD', 'Ruecolin69100!');

/** Adresse de l’hébergement MySQL. */
define('DB_HOST', 'localhost');

/** Jeu de caractères à utiliser par la base de données lors de la création des tables. */
define('DB_CHARSET', 'utf8mb4');

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
define('AUTH_KEY',         'CZH{t|%0S#FXhU1g^*gop,-wyqr[195h:7taZ$P#(myfI+f:K)St?g_LmN~<o5(j');
define('SECURE_AUTH_KEY',  '|bgjcya9qz_p59n/bEE9g]h0t)l%X%_q5)cN*]{OV/Pay6S,54vV=~~xx1qx>.Sj');
define('LOGGED_IN_KEY',    'NHgFuWDnySwW8>glx#H$$pIb, fdMC(SCQhYrHRulM*ROL,UhtEIZN6TIY`BYO@J');
define('NONCE_KEY',        'RAo=!F0qf7aKPc8P >N@K`y3jIl1!K 4URx%we,@K6qi+}>Rg32u;S@}RaskdwwH');
define('AUTH_SALT',        'glu:w*I%2MM)S~yw*R*0c(Sl%``RAL.Yt)+@wtbqp/$iG&D(CcQADc]=A,(W>_?%');
define('SECURE_AUTH_SALT', ';j!IU -WuM%Zgjzn0#}lV lt^&%Qh7!yG*t6~d*dvdu9|h[{TtGY9MAPf;f2HVdg');
define('LOGGED_IN_SALT',   'C*Cm|^4>}jHUvtF[1BuTpS~=y0Hr7WMH2h[.WH:$MF4d]x<=(Tx?LEJwgq^.26l:');
define('NONCE_SALT',       'Jn{:-^ylDdw;6+$.qnRyS@>Hnx@fWo7{G[#BL3p&4IC`D]A,x]yX;MTn5Oo$b1-(');
/**#@-*/

/**
 * Préfixe de base de données pour les tables de WordPress.
 *
 * Vous pouvez installer plusieurs WordPress sur une seule base de données
 * si vous leur donnez chacune un préfixe unique.
 * N’utilisez que des chiffres, des lettres non-accentuées, et des caractères soulignés !
 */
$table_prefix  = 'wpb_';

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