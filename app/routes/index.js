import Ember from 'ember';

export default Ember.Route.extend({
  route: "still not working",

  afterModel(){
    // var route = this.routeName;
    this.set('route', this.routeName);
    // console.log("AFTERMODEL SAYS ROUTE IS... "+ this.get('route'));

  }
});
