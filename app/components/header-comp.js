import Ember from 'ember';

export default Ember.Component.extend({
  destination: '',

  actions: {
    goto(destination){
      let id = destination.id;
      // console.log("DESTINO: " + id);
      this.sendAction('goto', id);
    }
  }
});
