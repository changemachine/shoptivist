import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    updateParentCompany(params, parent_company) {
      this.sendAction('updateParentCompany', parent_company, params);
    },
    deleteParentCompany(parent_company){
      this.sendAction('deleteParentCompany', parent_company);
    }
  }
});
