import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findAll('company');
  },

  actions: {
    saveCompany(params) {
      console.log(params);
      var newCompany = this.store.createRecord('company', params);
      newCompany.save();
      this.transitionTo('admin');
    },
    deleteCompany(company){
      company.destroyRecord();
      this.transitionTo('admin');
    }
  }
});
