const mix = require('laravel-mix');

mix
    .options({
        postCss: [
            require('postcss-nested'),
            require('autoprefixer'),
        ]
    })
    .postCss('resources/css/toolbar.css', 'dist');
