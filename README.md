# Select2 Bootstrap4 Theme

  
![select2-bootstrap4-theme version](https://img.shields.io/badge/select2--bootstrap4--theme-v.1.0.0-brightgreen.svg)
[![License](http://img.shields.io/badge/License-MIT-blue.svg)](http://opensource.org/licenses/MIT)


#### Compatibility

Tested with Bootstrap v4.1.1 and Select2 v4.0.6rc1 in latest Firefox, Chrome and Safari (Mac).

#### Installation

* [Download the latest release](https://github.com/berkan52/select2-bootstrap4-theme/releases).
* Clone the repo: `git clone https://github.com/berkan52/select2-bootstrap4-theme.git`.
* Install with [Bower](http://bower.io): `bower install select2-bootstrap4-theme`.
* Install with [npm](https://www.npmjs.com): `npm install select2-bootstrap4-theme`.

#### Usage

select2-bootstrap4-theme only works with Select2 v4.x. Applying the theme requires `select2-bootstrap4.css` referenced after the default `select2.css` that comes with Select2:

```html
<link rel="stylesheet" href="select2.css">
<link rel="stylesheet" href="select2-bootstrap4.css">
```

To apply the theme, tell Select2 to do so by passing `bootstrap` to the [`theme`](https://select2.github.io/examples.html#themes) option when initializing Select2:

```js
$( "#dropdown" ).select2({
    theme: "bootstrap4"
});
```

You may also set it as the default theme for all Select2 widgets like so:

```js
$.fn.select2.defaults.set( "theme", "bootstrap4" );
```

#### Changelog

##### Version 1.0.2

* Latest build for Bootstrap 4.1.1

##### Version 1.0.1

* Fixed some bugs when running `npm run dev`;

##### Version 1.0.0

 * Create project
 

#### Copyright and license

The license is available within the repository in the [LICENSE](LICENSE) file.
