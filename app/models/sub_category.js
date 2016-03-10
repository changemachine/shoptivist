import DS from 'ember-data';

export default DS.Model.extend({
  category: DS.belongsTo('category', { async: true }),
  products: DS.hasMany('product', { async: true }),
  name: DS.attr()
});
