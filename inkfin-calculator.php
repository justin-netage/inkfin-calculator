<?php 

/**
 * Plugin Name:       Inkfin Loan Calculator
 * Plugin URI:        https://github.com/justin-netage/inkfin-calculator
 * Description:       Displays calculator on selcted pages using shortcode and attributes.
 * Version:           1.1
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
	'https://github.com/justin-netage/inkfin-calculator',
	__FILE__,
	'inkfin-calculator'
);

//Set the branch that contains the stable release.
$myUpdateChecker->setBranch('main');

//Optional: If you're using a private repository, specify the access token like this:
// $myUpdateChecker->setAuthentication('your-token-here');

$myUpdateChecker->getVcsApi()->enableReleaseAssets();
$myUpdateChecker->setBranch('main');


add_shortcode('display_calculator', 'display_calculator_shortcode');
function display_calculator_shortcode( $atts = [], $content = null) {
    // do something to $content
    // always return
    $content = "Hello, World!";
    return $content;
}