import Ember from 'ember';

export default Ember.Component.extend({
  addNewCompany: false,
  actions: {
    companyFormShow() {
      this.set('addNewCompany', true);
      this.set('name', "");
      this.set('health_score', "");
      this.set('environment_score', "");
      this.set('social_score', "");
      this.set('parent_company', "");
    },

    saveCompany() {
      var params = {
        name: this.get('name'),
        health_score: this.get('health_score'),
        environment_score: this.get('environment_score'),
        social_score: this.get('social_score'),
        parent_company: this.get('parent_company.id') || null
      };
      this.set('addNewCompany', false);
      this.sendAction('saveCompany', params);
    }
  }
});
