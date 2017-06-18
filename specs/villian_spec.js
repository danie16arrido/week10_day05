var Villian = require('../villian.js');
var Hero = require('../hero.js');
var assert = require('assert');

describe('Test Villian', function(){

  var drx;
  var superman;

  beforeEach(function () {
    drx = new Villian("Doctor X");
    superman = new Hero("Superman");
  })

  it("Villian has a name", function () {
    assert.strictEqual(drx.name, "Doctor X");
  });

  it("Villian can damage hero with 10 health point when punching", function () {
    drx.attack( superman, "Punch");
    assert.strictEqual( superman.health, 90);
  });

  it("Villian can damage hero with 30 health point when FulNeckSwing", function () {
    drx.attack( superman, "FulNeckSwing");
    assert.strictEqual( superman.health, 70);
  });

  it("Villian can supercharge", function () {
    drx.superCharge();
    assert.strictEqual(drx.isSuperCharged, true);
  });

  it("Villian double damage when supercharged", function () {
    drx.superCharge();
    drx.attack( superman, "FulNeckSwing" );
    assert.strictEqual( superman.health, 40 );
  });

})
