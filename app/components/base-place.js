import Ember from 'ember';

const {
  Component,
  computed: { or }
} = Ember;

export default Component.extend({
  defaultImage: '/images/default-image.jpg',
  image: or('place.image', 'defaultImage')
});
