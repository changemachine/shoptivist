import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveSubCategory(category, params) {
      this.sendAction('saveSubCategory', category, params);
    }
  }
});
