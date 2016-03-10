import Ember from 'ember';

export default Ember.Component.extend({
  addNewSubCategory: false,

  actions: {
    subCategoryFormShow() {
      console.log("lasdfkjsldfkj")
      this.set('addNewSubCategory', true);
      this.set('name', "");
    },

    saveSubCategory(category) {
      var params = {
        name: this.get('name'),
      };
      this.set('addNewSubCategory', false);
      this.sendAction('saveSubCategory', category, params);
    }
  }
});
