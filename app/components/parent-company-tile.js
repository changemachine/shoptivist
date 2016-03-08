import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    updateParentCompany(params) {
      this.sendAction('updateParentCompany', parent_company, params);
    },
    deleteParentCompany(parent_company){
      this.sendAction('deleteParentCompany', parent_company);
    }
  }
});
