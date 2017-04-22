<?php
/**
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, and ABSPATH. You can find more information by visiting
 * {@link https://codex.wordpress.org/Editing_wp-config.php Editing wp-config.php}
 * Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */


// ============
// = Database =
// ============

// Development (vagrant)
// ---------------------------------------
define('DB_NAME', 'portland_dsa');
define('DB_USER', 'root');
define('DB_PASSWORD', 'root');
define('DB_HOST', 'localhost');

// Staging
// ---------------------------------------
// define('DB_NAME', 'portland_dsa');
// define('DB_USER', 'root');
// define('DB_PASSWORD', 'root');
// define('DB_HOST', 'localhost');

// Production
// ---------------------------------------
// define('DB_NAME', 'portland_dsa');
// define('DB_USER', 'root');
// define('DB_PASSWORD', 'root');
// define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');


// ============
// = Root URL =
// ============

// This will detect if we're using httpS and automatically
// use the current domain being accessed.
$currentHttpProtocol = ( isset($_SERVER['HTTPS']) ) ? 'https://' : 'http://';
$root_url            = $currentHttpProtocol . $_SERVER['SERVER_NAME'];

/*
FYI, the URLs are:
- Development server (vagrant):
  http://portland-dsa.dev
- Staging server:
  http://138.68.246.220
- Production server (note httpS):
  https://portlanddsa.org

Assuming you haven't modified the vagrant boxes' IP address,
please add the following to your 'hosts' file:
192.168.3.17 portland-dsa.dev
*/


// =======================
// = WordPress locations =
// =======================

define( 'WP_HOME',        $root_url );
define( 'WP_SITEURL',     $root_url . '/wordpress' );
define( 'WP_CONTENT_URL', $root_url . '/wp-content' );
define( 'WP_CONTENT_DIR', dirname(__FILE__) . '/wp-content' );


// ===================
// = Everything else =
// ===================

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'put your unique phrase here');
define('SECURE_AUTH_KEY',  'put your unique phrase here');
define('LOGGED_IN_KEY',    'put your unique phrase here');
define('NONCE_KEY',        'put your unique phrase here');
define('AUTH_SALT',        'put your unique phrase here');
define('SECURE_AUTH_SALT', 'put your unique phrase here');
define('LOGGED_IN_SALT',   'put your unique phrase here');
define('NONCE_SALT',       'put your unique phrase here');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
