import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    console.log("are we hare")
    return this.store.findRecord('sub_category', params.sub_category_id);
  }
});
