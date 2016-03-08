import Ember from 'ember';

export default Ember.Route.extend({
  location: 9,
  model(){
    // console.log("APP ROUTE: " + this.store.findAll('category'));
    return this.store.findAll('category');
  },
});
