import Ember from 'ember';

export default Ember.Route.extend({
  location: 9,
  model(){
    return this.store.findAll('category');
  },
});
