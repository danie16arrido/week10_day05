var Hero = require('../hero.js');
var assert = require('assert');


describe('account', function(){

  var myHero;

  beforeEach(function () {
    myHero = new Hero("Batman");
  })

  it("should get hero's name", function () {
    assert.equal(myHero.name, "Batman");
  });

  it("should have 100% health when created", function () {
    assert.equal(myHero.health, 100);
  });

  it("should be able to set new health value", function () {
    myHero.setHealth(99);
    assert.equal( myHero.health, 99);
  });
})
