import Ember from 'ember';

const { Route } = Ember;

export default Route.extend({
  model({ path_id }) {
    return this.modelFor('application').findBy('id', path_id);
  }
});
