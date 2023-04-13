<!-- statamic:hide -->

# Statamic Toolbar

<!-- /statamic:hide -->

This addon adds a toolbar in the lower left corner of your Statamic CMS frontend. It can display some useful information like:

- CSS Breakpoint Indicator \*
- Current Site
- Current Template
- Link to Control Panel

\* The Breakpoint Indicator *tries* to determine media queries automatically if you use [Tailwind CSS](https://tailwindcss.com/), [Bootstrap](https://getbootstrap.com/) or [Pico.css](https://picocss.com/).

## Installation

Require the addon as a Composer dependency.

```
composer require heidkaemper/statamic-toolbar
```

## Configuration

The Toolbar will be enabled on all Statamic routes by default, if app.debug is set to true.
If you want more control, make sure the configuration file has been published:

```
php artisan vendor:publish --tag="statamic-toolbar-config"
```

Have a look at the [configuration file](config/toolbar.php) for available options.

<!-- statamic:hide -->

---

<a href="https://statamic.com"><img src="https://img.shields.io/badge/Statamic-3.3+-FF269E?style=for-the-badge"></a>
<a href="https://packagist.org/packages/heidkaemper/statamic-toolbar"><img src="https://img.shields.io/packagist/v/heidkaemper/statamic-toolbar?style=for-the-badge"></a>

<!-- /statamic:hide -->
