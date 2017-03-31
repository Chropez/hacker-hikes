import Ember from 'ember';

const {
  Route
} = Ember;

export default Route.extend({
  model({ place_id }) {
    return this.modelFor('path').get('places').findBy('id', place_id);
  },

  setupController(controller) {
    controller.set('path', this.modelFor('path'));
    this._super(...arguments);
  }
});
