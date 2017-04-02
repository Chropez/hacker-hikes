import Ember from 'ember';

const {
  A,
  Component,
  computed: { or },
} = Ember;

export default Component.extend({
  defaultImage: '/images/default-image.jpg',
  image: or('path.image', 'defaultImage'),
  polylineColor: '#cc2d2d',
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
  }
});
