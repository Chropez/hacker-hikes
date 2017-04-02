/* eslint-env node */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'hacker-hikes',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    contentSecurityPolicy: {
      'default-src': "'none' https://forward-byte-711.appspot.com",
      'script-src': "'self' 'unsafe-inline' 'unsafe-eval' https://buttons.github.io https://api.github.com",
      'font-src': "'self' https://fonts.gstatic.com",
      'style-src': "'self' 'unsafe-inline' https://buttons.github.io https://fonts.googleapis.com",
      'connect-src': "'self' https://forward-byte-711.appspot.com",
      'img-src': "'self' data:",
      'media-src': "'self'",
      'child-src': "'self' https://buttons.github.io"
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    // do nothing
  }

  ENV['ember-component-css'] = {
    classicStyleDir: 'components'
  }

  return ENV;
};
