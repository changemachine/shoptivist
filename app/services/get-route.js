import Ember from 'ember';

export default Ember.Service.extend({
  currentRoute: '',

  setRoute(route){
    this.set('currentRoute', route);
    console.log("SETROUTE: " + route);
  }
});
