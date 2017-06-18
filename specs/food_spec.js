var Food = require('../food.js');
var assert = require('assert');


describe('Test Food', function(){

  var myFood;

  beforeEach(function () {
    myFood = new Food("Spinach", 45);
  })

  it("food has a name", function () {
    assert.strictEqual( myFood.name, "Spinach" );
  });

  it("food has replenishment value", function () {
    assert.strictEqual( myFood.value, 45);
  });

})
