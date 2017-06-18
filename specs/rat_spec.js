var Rat = require('../rat.js');
var Food = require('../food.js');
var assert = require('assert');

describe('Test Rat', function(){

  var myRat;
  var food;

  beforeEach(function () {
    myRat = new Rat("Raton");
    food = new Food("Apple", 3 );
  })

  it("rat has a name", function () {
    assert.strictEqual(myRat.name, "Raton");
  });

  it("rat can contaminate food", function () {
    myRat.touchFood( food );
    assert.strictEqual( true, food.isPoisonous );
  })
})
