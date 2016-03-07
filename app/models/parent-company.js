import DS from 'ember-data';

export default DS.Model.extend({
  companies: DS.hasMany('company', { async: true }),
  name: DS.attr(),
  health_score: DS.attr('number'),
  environment_score: DS.attr('number'),
  humaine_score: DS.attr('number')
});
