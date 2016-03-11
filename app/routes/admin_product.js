import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('product', params.product_id);
  },

  actions: {
    saveIngredient(product, params) {
      var newIngredient = this.store.createRecord('ingredient', params);
      product.get('ingredients').addObject(newIngredient);
      newIngredient.save().then(function() {
        return product.save();
      });
      this.transitionTo('admin_product', product);
    }
  }
});
