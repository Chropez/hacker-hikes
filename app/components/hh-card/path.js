import Ember from 'ember';

const {
  Component,
  computed,
  String: { htmlSafe }
} = Ember;

export default Component.extend({
  imageStyle: computed('path.image', function() {
    let image = this.get('path.image');
    return htmlSafe(`background-image: url('${image}')`);
  })
});
