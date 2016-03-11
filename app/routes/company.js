import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return Ember.RSVP.hash({
      company: this.store.findRecord('company', params.company_id),
      subcategories: this.store.findAll('sub_category')
    });
  },

  actions: {
    updateCompany(company, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          company.set(key,params[key]);
        }
      });
      company.save();
      this.transitionTo('admin');
    },

    saveProduct(company, params) {
      var newProduct = this.store.createRecord('product', params);
      params.sub_category.get('products').addObject(newProduct);
      company.get('products').addObject(newProduct);
      newProduct.save().then(function() {
        params.sub_category.save();
        return company.save();
      });
      this.transitionTo('company', company);
    }
  }
});
