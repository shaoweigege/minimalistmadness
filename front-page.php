<?php
/**
 * The template for displaying front page
 *
 * Contains the closing of the #content div and all content after.
 * Initial styles for front page template.
 *
 * @Date:   2019-10-15 12:30:02
 * @Last Modified by:   Roni Laukkarinen
 * @Last Modified time: 2020-03-25 18:41:14
 * @package minimalistmadness
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 */

namespace Air_Light;

get_header(); ?>

<div id="content" class="content-area">
  <main role="main" id="main" class="site-main">
    <div id="swup" class="transition-fade">

    <?php
      include get_theme_file_path( 'template-parts/hero.php' );
    ?>

    </div>
  </main><!-- #main -->
</div><!-- #primary -->

<?php get_footer();
