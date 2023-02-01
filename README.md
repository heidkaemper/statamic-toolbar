<!-- statamic:hide -->

## Statamic Toolbar

<!-- /statamic:hide -->

> A Statamic CMS frontend helper

This package adds a toolbar in the lower left corner of your frontend.
It can display a couple of informations that are helpful for templating.

- CSS Breakpoint Indicator \*
- Current Template
- Current Site
- Link to Control Panel

\* The Breakpoint Indicator *tries* to determine the configuration automatically if you use Tailwind CSS.

## Installation

Require the addon as a Composer dependency.

```
composer require heidkaemper/statamic-toolbar
```

## Configuration

The Toolbar will be enabled on all Statamic routes by default, if debug in your app.php is set to true. If you want more control, make sure the configuration file has been published.

```
php artisan vendor:publish --tag="statamic-toolbar-config"
```

Have a look at the [configuration file](config/toolbar.php) for available options.
