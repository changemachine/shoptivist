import DS from 'ember-data';

export default DS.Model.extend({
  parent_company: DS.belongsTo('parent_company', { async: true }),
  products: DS.hasMany('product', { async: true }),
  name: DS.attr()
});
