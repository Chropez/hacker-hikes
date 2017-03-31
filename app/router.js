import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('path',  { path: '/path/:path_id' }, function() {
    this.route('place', { path: '/place/:place_id' });
  });
});

export default Router;
