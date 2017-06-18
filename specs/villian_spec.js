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
  })
})
