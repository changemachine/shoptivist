import Ember from 'ember';

export default Ember.Route.extend({
  model(product) {
    return this.store.findRecord('product', product.product_id);
  },

});
