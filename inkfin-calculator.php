<?php 

include_once('updater.php');

/**
 * Plugin Name:       Inkfin Loan Calculator
 * Plugin URI:        https://github.com/justin-netage/inkfin-calculator
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

require 'plugin-update-checker/plugin-update-checker.php';
$myUpdateChecker = Puc_v4_Factory::buildUpdateChecker(
	'http://example.com/path/to/details.json',
	__FILE__, //Full path to the main plugin file or functions.php.
	'inkfin-calculator'
);

add_shortcode('display_calculator', 'display_calculator_shortcode');
function display_calculator_shortcode( $atts = [], $content = null) {
    // do something to $content
    // always return
    $content = "Hello, World!";
    return $content;
}