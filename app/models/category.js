import DS from 'ember-data';

export default DS.Model.extend({
  categories: DS.hasMany('category', { async: true }),
  name: DS.attr()
});
