var SuperVillian = require('../SuperVillian.js');
var Hero = require('../hero.js');
var assert = require('assert');

describe('Test Super Villian', function(){

  var GygaTyrant;
  var superman;

  beforeEach(function () {
    GygaTyrant = new SuperVillian("GygaTyrant", "DoubleHara-kiri");
    superman = new Hero("Superman");
  })

  it("supervillian has a name", function () {
    assert.strictEqual(GygaTyrant.name, "GygaTyrant");
  });

  it("supervillian can use DoubleHara-kiri", function () {
    GygaTyrant.useOwesomePower( superman );
    assert.strictEqual( GygaTyrant.health, 0 );
    assert.strictEqual( superman.health, 0 );
  });

})
