import Ember from 'ember';

export default Ember.Component.extend({

  product_avg: Ember.computed('product', function() {
    var health = this.product.get('product_health_score');
    var environment = this.product.get('product_environment_score');
    var social = this.product.get('product_social_score');
    return Math.round(((health + environment + social)/3) * 10) /10;
  }),

  company_avg: Ember.computed('product', function() {
    var health = this.product.get('company.health_score');
    var environment = this.product.get('company.environment_score');
    var social = this.product.get('company.social_score');
    console.log(health);
    return Math.round(((health + environment + social)/3) * 10) /10;
  }),
  // company_avg: Ember.computed('product', function() {
  //   var health = this.product.get('company.health_score');
  //   var environment = this.product.get('company.environment_score');
  //   var social = this.product.get('company.social_score');
  //   return Math.round(((health + environment + social)/3) * 10) /10;
  // }),


});
