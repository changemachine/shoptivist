import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('admin');
  this.route('parent-company', {path: 'parent-company/:parent_company_id'});
  this.route('parent-companies');
  this.route('company', {path: 'company/:company_id'});
});

export default Router;
