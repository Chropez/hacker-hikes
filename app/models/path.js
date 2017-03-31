import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { hasMany } from 'ember-data/relationships';
import Ember from 'ember';

const { computed: { and, empty } } = Ember;

export default Model.extend({
  name: attr('string'),
  length: attr('string'),
  time: attr('string'),
  image: attr('string'),
  info: attr('string'),
  polyline: attr(),
  places: hasMany(),

  hasNoName: empty('name'),
  hasNoImage: empty('image'),
  hasNoPolylines: empty('polyline'),
  hasNoPlaces: empty('places'),
  isEmpty: and('hasNoName', 'hasNoImage', 'hasNoPolylines', 'hasNoPlaces')
});
