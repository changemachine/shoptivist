import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveIngredient(product, params) {
      this.sendAction('saveIngredient', product, params);
    }
  }
});
