<?php 

include_once('updater.php');

/**
 * Plugin Name:       Inkfin Loan Calculator
 * Plugin URI:        https://example.com/plugins/the-basics/
 * Description:       Displays calculator on selcted pages using shortcode and attributes.
 * Version:           1.0
 * Requires at least: 5.2
 * Requires PHP:      7.2
 * Author:            Net Age
 * Author URI:        https://netage.co.za
 * License:           GPL v2 or later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Update URI:        https://github.com/justin-netage/inkfin-calculator
 * Text Domain:       inkfin-loan-calculator
 * Domain Path:       /languages
 */

if (is_admin()) { // note the use of is_admin() to double check that this is happening in the admin
    $config = array(
        'slug' => plugin_basename(__FILE__), // this is the slug of your plugin
        'proper_folder_name' => 'inkfin-calculator', // this is the name of the folder your plugin lives in
        'api_url' => 'https://api.github.com/repos/justin-netage/inkfin-calculator', // the GitHub API url of your GitHub repo
        'raw_url' => 'https://raw.github.com/justin-netage/inkfin-calculator/main', // the GitHub raw url of your GitHub repo
        'github_url' => 'https://github.com/justin-netage/inkfin-calculator', // the GitHub url of your GitHub repo
        'zip_url' => 'https://github.com/justin-netage/inkfin-calculator/archive/refs/heads/main.zip', // the zip url of the GitHub repo
        'sslverify' => true, // whether WP should check the validity of the SSL cert when getting an update, see https://github.com/jkudish/WordPress-GitHub-Plugin-Updater/issues/2 and https://github.com/jkudish/WordPress-GitHub-Plugin-Updater/issues/4 for details
        'requires' => '4.0', // which version of WordPress does your plugin require?
        'tested' => '5.9', // which version of WordPress is your plugin tested up to?
        'readme' => 'README.md', // which file to use as the readme for the version number
        'access_token' => '', // Access private repositories by authorizing under Plugins > GitHub Updates when this example plugin is installed
    );
    new WP_GitHub_Updater($config);
}