<?php 

/**
 * Plugin Name:       Inkfin Loan Calculator
 * Plugin URI:        https://github.com/justin-netage/inkfin-calculator
 * Description:       Displays calculator on selcted pages using shortcode and attributes.
 * Version:           1.0.2
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

//Get Updates

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

// Functions

function display_calculator_shortcode($atts, $content = null) {

    wp_enqueue_style( 'inkfin-calculator-css',  plugins_url( 'inkfin-calculator/assets/css/inkfin-loan-calculator.css' ) );
    wp_enqueue_style( 'slider-css',  'https://cdnjs.cloudflare.com/ajax/libs/rangeslider.js/2.3.2/rangeslider.min.css' );

    wp_enqueue_script( 'slider-js', 'https://cdnjs.cloudflare.com/ajax/libs/rangeslider.js/2.3.2/rangeslider.min.js', 'jquery', true );
    wp_enqueue_script( 'inkfin-calculator-js', plugins_url( 'inkfin-calculator/assets/js/inkfin-loan-calculator.js', 'jquery', '', true ) );

    ob_start();

    require('includes/templates/calculator-template.php');

    $content = ob_get_clean();

    return $content;
}

add_shortcode( 'display_calculator', 'display_calculator_shortcode');
