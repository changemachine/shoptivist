import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findAll('parent_company');
  },

  actions: {
    saveParentCompany(params) {
      console.log("are we here")
      var newParentCompany = this.store.createRecord('parent_company', params);
      newParentCompany.save();
      this.transitionTo('admin');
    },
    deleteParentCompany(parent_company){
      parent_company.destroyRecord();
      this.transitionTo('parent-companies');
    }
  }
});
