import Ember from 'ember';

export default Ember.Component.extend({
  fatSearch: false,

//WILL NOT WORK: 'index' is not in the URL.
// init(){
//   this._super(...arguments);
//   if ( location.href.indexOf('index') !== -1){
//     this.set('fatSearch', true);
//   }else{
//     this.set('fatSearch', false);
//   }
// },
  init(){
    console.log("ROUTE NAME: " + this.routeName);
    this._super(...arguments);
    if ( this.routeName === 'index'){
      this.set('fatSearch', true);
    }else{
      this.set('fatSearch', false);
    }
  },

});
