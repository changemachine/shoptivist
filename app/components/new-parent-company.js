import Ember from 'ember';

export default Ember.Component.extend({
  addNewParentCompany: false,
  actions: {
    parentFormShow() {
      this.set('addNewParentCompany', true);
      this.set('name', "");
      this.set('health_score', "");
      this.set('environment_score', "");
      this.set('humaine_score', "");
    },

    saveParentCompany() {
      var params = {
        name: this.get('name'),
        health_score: this.get('health_score'),
        environment_score: this.get('environment_score'),
        humaine_score: this.get('humaine_score'),
      };
      this.set('addNewParentCompany', false);
      this.sendAction('saveParentCompany', params);
    }
  }
});
