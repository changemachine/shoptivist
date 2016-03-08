import Ember from 'ember';

export default Ember.Component.extend({
  actions:{
    deleteParentCompany(parent_company){
      this.sendAction('deleteParentCompany', parent_company);
    },
    saveParentCompany(params) {
      this.sendAction('saveParentCompany', params);
    }
  }
});
