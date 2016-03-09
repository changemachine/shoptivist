import Ember from 'ember';

export default Ember.Component.extend({

//WILL NOT WORK: 'index' is not in the URL.
init(){
  this._super(...arguments);
  console.log("HOORAY!");
  // if ( location.href.indexOf('index') !== -1){
  //   this.set('fatSearch', true);
  // }else{
  //   this.set('fatSearch', false);
  // }
},

});
