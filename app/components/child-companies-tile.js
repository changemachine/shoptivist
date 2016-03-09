import Ember from 'ember';

export default Ember.Component.extend({
});


import Ember from 'ember';

export default Ember.Component.extend({
  addNewChildCompany: false,
  actions: {
    parentFormShow() {
      this.set('addNewChildCompany', true);
      this.set('name', "");
    },

    saveParentCompany() {
      var params = {
        name: this.get('name'),
      };
      this.set('addNewChildCompany', false);
      this.sendAction('saveChildCompany', params);
    }
  }
});


import DS from 'ember-data';

export default DS.Model.extend({
  parent_company: DS.belongsTo('parent_company', { async: true }),
  products: DS.hasMany('product', { async: true }),
  name: DS.attr()
});
