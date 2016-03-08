import DS from 'ember-data';

export default DS.Model.extend({
  company: DS.belongsTo('company', { async: true }),
  ingredients: DS.hasMany('ingredient', { async: true }),
  name: DS.attr(),
  Description: DS.attr(),
  image_url: DS.attr(),
  health_score: DS.attr('number'),
  environment_score: DS.attr('number'),
  humaine_score: DS.attr('number')
});
