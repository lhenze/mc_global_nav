<?php
/**
 * @file
 * mc_global_nav.features.fe_block_settings.inc
 */

/**
 * Implements hook_default_fe_block_settings().
 */
function mc_global_nav_default_fe_block_settings() {
  $export = array();

  $export['version'] = '2.0';


  $export['menu-menu-mcglobalnav'] = array(
    'cache' => -1,
    'custom' => 0,
    'delta' => 'menu-mcglobalnav',
    'module' => 'menu',
    'node_types' => array(),
    'pages' => '',
    'roles' => array(),
    'themes' => array(
      'mediacommons' => array(
        'region' => 'globalnav',
        'status' => 1,
        'theme' => 'mediacommons',
        'weight' => 0,
        ),

      'rubik' => array(
        'theme' => 'rubik',
        ),
      'zen' => array(
        'theme' => 'zen',
        ),
      ),
    'title' => '',
    'visibility' => 0,
    );

  return $export;
}
