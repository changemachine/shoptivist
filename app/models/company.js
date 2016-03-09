import DS from 'ember-data';

export default DS.Model.extend({
  products: DS.hasMany('product', { async: true }),
  name: DS.attr(),
  health_score: DS.attr('number'),
  environment_score: DS.attr('number'),
  social_score: DS.attr('number'),
  parent_company: DS.attr('')
});
