import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('parent_company', params.parent_company_id);
  },

  actions: {
    updateParentCompany(parent_company, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          parent_company.set(key,params[key]);
        }
      });
      parent_company.save();
      this.transitionTo('parent-companies');
    }
  }
});
