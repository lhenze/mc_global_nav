<?php
/**
 * @file
 * mc_global_nav.features.user_permission.inc
 */

/**
 * Implements hook_user_default_permissions().
 */
function mc_global_nav_user_default_permissions() {
  $permissions = array();

  // Exported permission: 'administer menu'.
  $permissions['administer menu'] = array(
    'name' => 'administer menu',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'menu',
  );

  return $permissions;
}
