import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    updateParentCompany(parent_company) {
      var params = {
        name: this.get('parent_company.name'),
        health_score: this.get('parent_company.health_score'),
        environment_score: this.get('parent_company.environment_score'),
        humaine_score: this.get('parent_company.humaine_score'),
      };
      this.sendAction('updateParentCompany', parent_company, params);
    }
  }
});
