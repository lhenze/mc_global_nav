<?php
/**
 * @file
 * mc_global_nav.features.menu_links.inc
 */

/**
 * Implements hook_menu_default_menu_links().
 */
function mc_global_nav_menu_default_menu_links() {
  $menu_links = array();

  // Exported menu link: menu-mcglobalnav_alt-academy:http://localhost/alt-ac/
  $menu_links['menu-mcglobalnav_alt-academy:http://localhost/alt-ac/'] = array(
    'menu_name' => 'menu-mcglobalnav',
    'link_path' => 'http://localhost/alt-ac/',
    'router_path' => '',
    'link_title' => '#Alt-Academy',
    'options' => array(
      'attributes' => array(
        'title' => '',
      ),
      'identifier' => 'menu-mcglobalnav_alt-academy:http://localhost/alt-ac/',
    ),
    'module' => 'menu',
    'hidden' => 0,
    'external' => 1,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -47,
    'customized' => 1,
    'parent_identifier' => 'menu-mcglobalnav_front-page:http://localhost/mediacommons',
  );
  // Exported menu link: menu-mcglobalnav_front-page:http://localhost/mediacommons
  $menu_links['menu-mcglobalnav_front-page:http://localhost/mediacommons'] = array(
    'menu_name' => 'menu-mcglobalnav',
    'link_path' => 'http://localhost/mediacommons',
    'router_path' => '',
    'link_title' => 'Front page',
    'options' => array(
      'attributes' => array(
        'title' => '',
      ),
      'identifier' => 'menu-mcglobalnav_front-page:http://localhost/mediacommons',
    ),
    'module' => 'menu',
    'hidden' => 0,
    'external' => 1,
    'has_children' => 1,
    'expanded' => 1,
    'weight' => 0,
    'customized' => 1,
  );
  // Exported menu link: menu-mcglobalnav_in-media-res:http://localhost/imr/
  $menu_links['menu-mcglobalnav_in-media-res:http://localhost/imr/'] = array(
    'menu_name' => 'menu-mcglobalnav',
    'link_path' => 'http://localhost/imr/',
    'router_path' => '',
    'link_title' => 'In Media Res',
    'options' => array(
      'attributes' => array(
        'title' => '',
      ),
      'identifier' => 'menu-mcglobalnav_in-media-res:http://localhost/imr/',
    ),
    'module' => 'menu',
    'hidden' => 0,
    'external' => 1,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -50,
    'customized' => 1,
    'parent_identifier' => 'menu-mcglobalnav_front-page:http://localhost/mediacommons',
  );
  // Exported menu link: menu-mcglobalnav_intransition:http://localhost/in-transition/
  $menu_links['menu-mcglobalnav_intransition:http://localhost/in-transition/'] = array(
    'menu_name' => 'menu-mcglobalnav',
    'link_path' => 'http://localhost/in-transition/',
    'router_path' => '',
    'link_title' => '[in]Transition',
    'options' => array(
      'attributes' => array(
        'title' => '',
      ),
      'identifier' => 'menu-mcglobalnav_intransition:http://localhost/in-transition/',
    ),
    'module' => 'menu',
    'hidden' => 0,
    'external' => 1,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => 10,
    'customized' => 1,
    'parent_identifier' => 'menu-mcglobalnav_front-page:http://localhost/mediacommons',
  );
  // Exported menu link: menu-mcglobalnav_log-in:user/login
  $menu_links['menu-mcglobalnav_log-in:user/login'] = array(
    'menu_name' => 'menu-mcglobalnav',
    'link_path' => 'user/login',
    'router_path' => 'user/login',
    'link_title' => 'Log in',
    'options' => array(
      'attributes' => array(
        'title' => '',
      ),
      'identifier' => 'menu-mcglobalnav_log-in:user/login',
    ),
    'module' => 'menu',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => 17,
    'customized' => 1,
  );
  // Exported menu link: menu-mcglobalnav_log-out:user/logout
  $menu_links['menu-mcglobalnav_log-out:user/logout'] = array(
    'menu_name' => 'menu-mcglobalnav',
    'link_path' => 'user/logout',
    'router_path' => 'user/logout',
    'link_title' => 'Log out',
    'options' => array(
      'attributes' => array(
        'title' => '',
      ),
      'identifier' => 'menu-mcglobalnav_log-out:user/logout',
    ),
    'module' => 'menu',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -48,
    'customized' => 1,
    'parent_identifier' => 'menu-mcglobalnav_my-account:user',
  );
  // Exported menu link: menu-mcglobalnav_mediacommons-press:<front>
  $menu_links['menu-mcglobalnav_mediacommons-press:<front>'] = array(
    'menu_name' => 'menu-mcglobalnav',
    'link_path' => '<front>',
    'router_path' => '',
    'link_title' => 'MediaCommons Press',
    'options' => array(
      'attributes' => array(
        'title' => '',
      ),
      'identifier' => 'menu-mcglobalnav_mediacommons-press:<front>',
    ),
    'module' => 'menu',
    'hidden' => 0,
    'external' => 1,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -48,
    'customized' => 1,
    'parent_identifier' => 'menu-mcglobalnav_front-page:http://localhost/mediacommons',
  );
  // Exported menu link: menu-mcglobalnav_my-account:user
  $menu_links['menu-mcglobalnav_my-account:user'] = array(
    'menu_name' => 'menu-mcglobalnav',
    'link_path' => 'user',
    'router_path' => 'user',
    'link_title' => 'My Account',
    'options' => array(
      'attributes' => array(
        'title' => '',
      ),
      'identifier' => 'menu-mcglobalnav_my-account:user',
    ),
    'module' => 'menu',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 1,
    'expanded' => 1,
    'weight' => 12,
    'customized' => 1,
  );
  // Exported menu link: menu-mcglobalnav_the-new-everyday:http://localhost/tne/
  $menu_links['menu-mcglobalnav_the-new-everyday:http://localhost/tne/'] = array(
    'menu_name' => 'menu-mcglobalnav',
    'link_path' => 'http://localhost/tne/',
    'router_path' => '',
    'link_title' => 'The New Everyday',
    'options' => array(
      'attributes' => array(
        'title' => '',
      ),
      'identifier' => 'menu-mcglobalnav_the-new-everyday:http://localhost/tne/',
    ),
    'module' => 'menu',
    'hidden' => 0,
    'external' => 1,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -49,
    'customized' => 1,
    'parent_identifier' => 'menu-mcglobalnav_front-page:http://localhost/mediacommons',
  );
  // Exported menu link: menu-mcglobalnav_view-my-contributions:user
  $menu_links['menu-mcglobalnav_view-my-contributions:user'] = array(
    'menu_name' => 'menu-mcglobalnav',
    'link_path' => 'user',
    'router_path' => 'user',
    'link_title' => 'View my contributions',
    'options' => array(
      'attributes' => array(
        'title' => '',
      ),
      'identifier' => 'menu-mcglobalnav_view-my-contributions:user',
    ),
    'module' => 'menu',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -50,
    'customized' => 1,
    'parent_identifier' => 'menu-mcglobalnav_my-account:user',
  );
  // Translatables
  // Included for use with string extractors like potx.
  t('#Alt-Academy');
  t('Front page');
  t('In Media Res');
  t('Log in');
  t('Log out');
  t('MediaCommons Press');
  t('My Account');
  t('The New Everyday');
  t('View my contributions');
  t('[in]Transition');


  return $menu_links;
}
