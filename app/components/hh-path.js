import Ember from 'ember';

const {
  Component,
  computed: { or },
  inject: { service }
} = Ember;

export default Component.extend({
  defaultImage: '/img/default-image.jpg',
  image: or('path.image', 'defaultImage'),
  marker1: [63.825428956712742, 20.265859365463257],
  router: service('-routing'),
  color: '#cc2d2d',

  actions: {
    goToPlace(placeId) {
      let path = this.get('path');
      let place = path.get('places').findBy('id', placeId);
      this.get('router').transitionTo('path.place', [path, place]);
    },

    goToPath() {
      let path = this.get('path');
      this.get('router').transitionTo('path.place', [path]);
    }
  }
});
