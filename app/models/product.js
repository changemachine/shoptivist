import DS from 'ember-data';

export default DS.Model.extend({
  company: DS.belongsTo('company', { async: true }),
  ingredients: DS.hasMany('ingredient', { async: true }),
  product_name: DS.attr(),
  product_description: DS.attr(),
  product_image_url: DS.attr(),
  product_health_score: DS.attr('number'),
  product_environment_score: DS.attr('number'),
  product_social_score: DS.attr('number')
});
