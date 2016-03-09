import Ember from 'ember';

export default Ember.Route.extend({
  getRoute: Ember.inject.service(),

  afterModel(){
    this.get('getRoute').setRoute(this.routeName);
    // console.log("INDEX AFTERMODEL ROUTE : "+ this.routeName);
  },
  //WORKS GREAT but only from routes.  How to inform comps?
  // route: "still not working",
  // afterModel(){
  //   // var route = this.routeName;
  //   this.set('route', this.routeName);
  //   console.log("AFTERMODEL SAYS ROUTE IS... "+ this.get('route'));
  // }
});
