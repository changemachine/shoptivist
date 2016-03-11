import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('admin');
  this.route('company',   {path: 'company/:company_id'} );
  this.route('subcat');
  this.route('admin_product', {path: 'admin_product/:product_id'});
  this.route('admin_category', {path: 'admin_category/:category_id'});
  this.route('fe_category', {path: 'category/:category_id'});
  this.route('fe_subcategory', {path: 'sub_category/:sub_category_id'});
  this.route('fe_product', {path: 'product/:product_id'});
});

export default Router;
