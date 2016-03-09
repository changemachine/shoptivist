import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('company', params.company_id);
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
      company.get('products').addObject(newProduct);
      newProduct.save().then(function() {
        return company.save();
      });
      this.transitionTo('company', company);
    }
  }
});
