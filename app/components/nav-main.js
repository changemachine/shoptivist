import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    showCat(cat){
      console.log('CAT: ' + cat);
    }
  }
});
