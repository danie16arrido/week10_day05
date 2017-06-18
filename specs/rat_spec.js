var Rat = require('../rat.js');
var assert = require('assert');


describe('Test Rat', function(){

  var myRat;

  beforeEach(function () {
    myRat = new Rat("Raton");
  })

  it("rat has a name", function () {
    assert.strictEqual(myRat.name, "Raton");
  });
})
