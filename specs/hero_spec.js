var Hero = require('../hero.js');
var assert = require('assert');


describe('account', function(){

  var myHero;

  beforeEach(function () {
    myHero = new Hero("Batman");
  })

  it("should get hero's name", function () {
    assert.equal(myHero.name, "Batman");
  })
})
