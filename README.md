# pith-pack-jquery
Pack jQuery for Pith

-------

# About

This project packs jQuery so that it can be used with the Pith Framewok.

For info on jQuery, see the jQuery website at https://jquery.com/

For info on Pith, see the Pith website at https://pith-framework.org/

# Install

Install to an existing Pith Framework project

Use Composer to install pack to the `vendor` folder.
```bash
php composer.phar require pith-front/pith-pack-jquery
```

Add new route to you Route List:

```php
public array $routes = [
    // Other routes....
    // ...
    
    // Add route to call jQuery from
    ['route', 'GET', '/resources/vendor/library/jquery/{filepath:.+}', '\\PithFront\\PithPackJquery\\JqueryResourceRoute'],
];
```

To add jQuery to the page from PHP, call `addScript( )` in a View Requisition. 

(For the last parameter use 'library-for-layout' if jQuery needs to be loaded with the theme scripts and styles, otherwise use 'library-for-page' to load with the current page-specific scripts and styles.)

```php 
$this->addScript('jQuery', '/resources/vendor/library/jquery/jquery-3.6.4/jquery-3.6.4.min.js', 'library-for-page');
```

To add jQuery in HTML, do:

```html 
<script src="/resources/vendor/library/jquery/jquery-3.6.4/jquery-3.6.4.min.js"></script> <!-- jQuery -->
```

-------------


# Licensing Info

The legal info below was current at the time of writing. Future/Newer versions may be licensed or copyrighted differently


### Sizzle.js
- Sizzle.js *(included inside jQuery)*
- MIT License, with exception for linked node modules being licensed separately. 
- Copyright (c) JS Foundation and other contributors, See https://js.foundation/ 
- Repo: https://github.com/jquery/sizzle/wiki

### jQuery 3.6.4
- jQuery 3.6.4 *(included inside pith-pack-jquery)*
- Released under the MIT license. *(Also Includes Sizzle.js https://sizzlejs.com/)* 
- Copyright (c) OpenJS Foundation and other contributors. 
- Site: https://jquery.com/

### pith-pack-jquery
- pith-pack-jquery
- MIT license *(Matching the included jQuery and Sizzle.js)*
- Copyright (c) Ian Maurmann
- Link: https://github.com/pith-front/pith-pack-jquery