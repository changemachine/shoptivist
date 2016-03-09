import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    updateCompany(company) {
      var params = {
        name: this.get('company.name'),
        health_score: this.get('company.health_score'),
        environment_score: this.get('company.environment_score'),
        social: this.get('company.social_score'),
        social: this.get('company.parent_company'),
      };
      this.sendAction('updateCompany', company, params);
    },

    saveProduct(company, params) {
      this.sendAction('saveProduct', company, params);
    }
  }
});
