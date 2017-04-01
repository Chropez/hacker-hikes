import Ember from 'ember';

const {
  A,
  Component,
  computed: { or },
  inject: { service }
} = Ember;

export default Component.extend({
  defaultImage: '/img/default-image.jpg',
  image: or('path.image', 'defaultImage'),
  router: service('-routing'),
  color: '#cc2d2d',
  allBounds: null,

  didReceiveAttrs() {
    let polyline = this.get('path.polyline');
    let placesPositions = this.get('path.places').map((place) => {
      return place.get('position');
    });

    let allBounds = A().pushObjects(polyline);
    allBounds.pushObjects(placesPositions);
    allBounds.removeObject(null);
    this.set('allBounds', allBounds);
    this._super(...arguments);
  },

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
