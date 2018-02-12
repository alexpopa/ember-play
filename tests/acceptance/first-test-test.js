import { test } from 'qunit';
import moduleForAcceptance from 'ember-code-challenge/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | first test');

test('visiting /', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/');
  });
});
