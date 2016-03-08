import DS from 'ember-data';

export default DS.Model.extend({
  sub_categories: DS.hasMany('sub-category', { async: true }),
  name: DS.attr()
});
