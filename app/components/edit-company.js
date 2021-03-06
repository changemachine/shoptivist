import Ember from 'ember';

export default Ember.Component.extend({
  /* PASSED FROM COMPANY ROUTE:
  model (company & sub_categories), updateCompany() & saveProduct()*/
   
  actions: {
    updateCompany(company) {
      var params = {
        name: this.get('company.name'),
        health_score: this.get('company.health_score'),
        environment_score: this.get('company.environment_score'),
        social: this.get('company.social_score')
      };
      this.sendAction('updateCompany', company, params);
    },

    saveProduct(company, params) {
      this.sendAction('saveProduct', company, params);
    }
  }
});
