import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('parent-companies-tile', 'Integration | Component | parent companies tile', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{parent-companies-tile}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#parent-companies-tile}}
      template block text
    {{/parent-companies-tile}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
