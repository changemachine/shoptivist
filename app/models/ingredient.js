import DS from 'ember-data';

export default DS.Model.extend({
  product: DS.belongsTo('product', { async: true }),
  ingredient: DS.attr(),
  quantity: DS.attr('number'),
  type: DS.attr()
});
