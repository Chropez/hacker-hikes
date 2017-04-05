import PaperToolbar from 'ember-paper/components/paper-toolbar';

export default PaperToolbar.extend({
  attributeBindings: ['main:data-toolbar'],
  main: 'main'
});
