import Ember from 'ember';

export default Ember.Component.extend({
  actions:{
    deleteCompany(company){
      this.sendAction('deleteCompany', company);
    }
  }
});
