import Ember from 'ember';

export default Ember.Route.extend({
  model(product_id){
    return this.store.findAll('product', product_id);
  }
});
