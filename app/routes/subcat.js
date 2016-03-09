import Ember from 'ember';

export default Ember.Route.extend({
  model(subcat){
    return this.store.findAll('sub_category', subcat);
  }
});
