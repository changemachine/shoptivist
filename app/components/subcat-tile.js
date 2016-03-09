import Ember from 'ember';

export default Ember.Component.extend({
  showSubcatForm: false,

  actions:{
    toggleNewSubcat(){
      this.set('showSubcatForm', !this.get('showSubcatForm'));
      console.log(this.get("SHOWFORM: " + 'showSubcatForm'));
    },
    deleteProduct(product){
      this.sendAction('deleteProduct', product);
    },
    newProduct(productData) {
      this.sendAction('newProduct', productData);
    }
  }
});
