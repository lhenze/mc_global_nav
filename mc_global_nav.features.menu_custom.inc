<?php
/**
 * @file
 * mc_global_nav.features.menu_custom.inc
 */

/**
 * Implements hook_menu_default_menu_custom().
 */
function mc_global_nav_menu_default_menu_custom() {
  $menus = array();

  // Exported menu: menu-mcglobalnav.
  $menus['menu-mcglobalnav'] = array(
    'menu_name' => 'menu-mcglobalnav',
    'title' => 'MediaCommons Global Navigation',
    'description' => 'Global nav - Menu for navigating among projects ',
  );
  // Translatables
  // Included for use with string extractors like potx.
  t('Global nav - Menu for navigating among projects ');
  t('MediaCommons Global Navigation');


  return $menus;
}
