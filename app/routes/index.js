import Ember from 'ember';

export default Ember.Route.extend({
  getRoute: Ember.inject.service(),

  model(){
    return this.store.findAll('product');
  },

  afterModel(){
    this.get('getRoute').setRoute(this.routeName);
  },
  //WORKS GREAT but only from routes.  How to inform comps?
  // route: "still not working",
  // afterModel(){
  //   // var route = this.routeName;
  //   this.set('route', this.routeName);
  //   console.log("AFTERMODEL SAYS ROUTE IS... "+ this.get('route'));
  // }

  actions: {
    goto(id){
      // console.log(id);
      this.transitionTo('product', id);
    }
  }
});
