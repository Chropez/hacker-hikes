# hacker-hikes

Hacker-hikes is a single page app made with the framework Emberjs. 
The purpose of hacker-hikes is to expose hiking and trails data coming from a web API.


[Demo](https://hacker-hikes.herokuapp.com/)

## Motivation
Ember is a great javascript framework for rapidly building ambitious web apps.
Ember uses babel that allows you to write ES6 in your apps!

The web app is automatically deployed to Heroku everytime master is pushed.

The user interface uses material design to give the user a great user experience.

Besides that, hacker-hikes is a progressive web app. 
The web app scores 88 of 100 in the [lighthouse chrome extension](https://chrome.google.com/webstore/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk) that audits different aspects of progressive web apps.

Some of the progressive web are features added are
* Can be added to the homescreen in a phone and be used stand alone (more like an app)
* Progressively enhanced - fast first render performance done server rendered
* Offline support with service workers
* Responsive design

## Dependencies

* Ember-CLI - Command line interface for development and building the web app
* Ember-Data - data persistence layer used with custom serializer/adapter to connect to the API
* Ember-Paper - material design ember/css addon
* Ember-Leaflet - Map-addon. Uses the library Leaflet.
* Ember-Fastboot - used to render the app on the server for progressive enhancement.
* Sass - for better styling

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Bower](https://bower.io/)
* [Ember CLI](https://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* `cd hacker-hikes`
* `npm install`
* `bower install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
