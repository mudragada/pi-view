import Ember from 'ember';
import FormErrorsMixin from '../../../mixins/form-errors';
import { module, test } from 'qunit';

module('Unit | Mixin | form errors');

// Replace this with your real tests.
test('it works', function(assert) {
  var FormErrorsObject = Ember.Object.extend(FormErrorsMixin);
  var subject = FormErrorsObject.create();
  assert.ok(subject);
});
