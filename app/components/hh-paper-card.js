import PaperCard from 'ember-paper/components/paper-card';

export default PaperCard.extend({
  attributeBindings: ['dataCardId:data-paper-card'],
  dataCardId: '',
  classNames: 'animating-content'
});
