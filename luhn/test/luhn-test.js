var assert = require('assert');
var luhn = require('../luhn');

describe('Luhn', function() {
  it('should return true when the value is a modulo of 10', function() {
    assert.equal(true, luhn(79927398713) );
  });
  it('should return false when the value is not a modulo of 10', function() {
    assert.equal(false, luhn(79927398712) );
  });

});
