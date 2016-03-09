import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      companies: this.store.findAll('company'),
      categories: this.store.findAll('category')
    });
  },

  actions: {
    saveCompany(params) {
      var newCompany = this.store.createRecord('company', params);
      newCompany.save();
      this.transitionTo('admin');
    },
    deleteCompany(company){
      company.destroyRecord();
      this.transitionTo('admin');
    },
    saveCategory(params) {
      console.log('are we here')
      var newCategory = this.store.createRecord('category', params);
      newCategory.save();
      this.transitionTo('admin');
    }
  }
});
