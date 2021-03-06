let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix
   .styles('resources/assets/blog/css/styles.css', 'public/blog/css/styles.css')
   .scripts('resources/assets/blog/js/scripts.js', 'public/blog/js/scripts.js');
