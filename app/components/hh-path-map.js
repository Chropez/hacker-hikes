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
    // merges all the positions of the polyline with the places
    // and puts it in the variable allBounds which is used to center
    // the map
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
