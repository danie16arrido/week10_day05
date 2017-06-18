var Hero = require('../hero.js');
var assert = require('assert');


describe('Test Hero', function(){

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

  it("should not have fav food to start with", function () {
    assert.strictEqual( myHero.favFood.name, null);
  });

  it("should be able to have fav food", function () {
    myHero.setFavFood("Banana");
    assert.strictEqual( myHero.favFood.name, "Banana");
  });

  it("should talk his name", function () {
    assert.strictEqual(myHero.sayName(), "I am the great Batman");
  });

  it("hero has no tasks when created",function () {
    assert.strictEqual(myHero.tasks.length, 0);
  });

  it("can add to tasks", function () {
    myHero.addTask("kill_monster");
    assert.strictEqual(myHero.tasks.length, 1);
  })
})
