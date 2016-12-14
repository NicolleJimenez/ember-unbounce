import {
  module,
  test
} from 'qunit';
import Ember from 'ember';
import startApp from '../helpers/start-app';

module('Acceptance | Initializer', {
  beforeEach: function () {
    this.App = startApp();
  },
  afterEach: function () {
    Ember.run(this.App, 'destroy');
  }
});

test('it embeds the unbounce script', function (assert) {
  assert.equal(Ember.$('#unbounce-convertable').length, 1);
});
