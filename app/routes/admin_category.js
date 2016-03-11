import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('category', params.category_id);
  },

  actions: {
    saveSubCategory(category, params) {
      var newSubCategory = this.store.createRecord('sub_category', params);
      category.get('sub_categories').addObject(newSubCategory);
      newSubCategory.save().then(function() {
        return category.save();
      });
      this.transitionTo('admin_category', category);
    }
  }
});
