import Ember from 'ember';

export default Ember.Component.extend({
  addNewIngredient: false,
  actions: {
    IngredientFormShow() {
      this.set('addNewIngredient', true);
      this.set('ingredient', "");
      this.set('quantity', "");
      this.set('type', "");
    },

    saveIngredient(product) {
      var params = {
        ingredient: this.get('ingredient'),
        quantity: this.get('quantity'),
        type: this.get('type')
      };
      this.set('addNewIngredient', false);
      this.sendAction('saveIngredient', product, params);
    }
  }
});
