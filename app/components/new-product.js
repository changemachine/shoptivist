import Ember from 'ember';

export default Ember.Component.extend({
  addNewProduct: false,
  subcat: "",

  actions: {
    productFormShow() {
      this.set('addNewProduct', true);
      this.set('product_name', "");
      this.set('product_description', "");
      this.set('product_image_url', "");
      this.set('product_health_score', "");
      this.set('product_environment_score', "");
      this.set('product_social_score', "");
    },

    saveProduct(company) {
      var params = {
        product_name: this.get('product_name'),
        product_description: this.get('product_description'),
        product_image_url: this.get('image_url'),
        product_health_score: this.get('product_health_score'),
        product_environment_score: this.get('product_environment_score'),
        product_social_score: this.get('product_social_score'),
        sub_category: this.get('subcat')
      };
      this.set('addNewProduct', false);
      this.sendAction('saveProduct', company, params);
    }
  }
});
