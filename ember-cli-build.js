/* eslint-env node */
const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    // needed for leaflet
    fingerprint: {
      exclude: [
        'images/layers-2x.png',
        'images/layers.png',
        'images/marker-icon-2x.png',
        'images/marker-icon.png',
        'images/marker-shadow.png'
      ]
    },

    // caches external hosts
    'esw-cache-fallback': {
      patterns: [
        'https://forward-byte-711.appspot.com/read/Test/Development/sv(.*)',
        '[http|https]://upload.wikimedia.org/(.+)',
        '[http|https]://www8.tfe.umu.se/(.+)',
        'https://fbcdn-sphotos-c-a.akamaihd.net/(.+)',
        '[http|https]://static.auspost.com.au/(.+)',
        '[http|https]://b.basemaps.cartocdn.com/(.+)',
        'https://buttons.github.io/(.+)',
        'https://api.github.com/(.+)',
        'https://fonts.gstatic.com/(.+)',
        'https://fonts.googleapis.com/(.+)'
      ],
      version: '1'
    },

    // cache assets
    'asset-cache': {
      include: [
        'assets/**/*',
        'images/**/*'
      ]
    }
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  return app.toTree();
};
