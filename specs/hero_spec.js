var Hero = require('../hero.js');
var Food = require('../food.js');
var Task = require('../task.js');
var assert = require('assert');

describe('Test Hero', function(){

  var myHero;
  var myFood;
  var task1;
  var task2;
  var task3;
  var task4;

  beforeEach(function () {
    myHero = new Hero("Batman");
    myFood = new Food( "Brocoli", 10);
    task1 = new Task("Kill Monster", 6, 3, "Chocolate");
    task2 = new Task("Save The World", 9, 2, "Chocolate");
    task3 = new Task("Blow up the Death Star", 10, 1, "Chocolate");
    task4 = new Task("Save school bus from river", 4, 5, "Chocolate");

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
  });

  it("hero can eat food", function () {
    myHero.setHealth(40);
    myHero.eatFood( myFood );
    assert.strictEqual(myHero.health, 50);
  });

  it("hero can not increse health over 100", function () {
    myHero.eatFood( myFood );
    assert.strictEqual(myHero.health, 100);
  }),

  it("hero can get more from his fav food", function () {
    myHero.setHealth( 50 );
    myHero.setFavFood( "Brocoli");
    myHero.eatFood( myFood );
    assert.strictEqual(myHero.health, 65);
  });

  it("hero can sort tasks by difficulty", function () {
    myHero.addTask( task1 );
    myHero.addTask( task2 );
    myHero.addTask( task3 );
    myHero.addTask( task4 );
    myHero.sortTaskByDifficulty();
    assert.strictEqual(myHero.tasks[0].name, "Blow up the Death Star");
  });

  it("hero can sort tasks by urgency", function () {
    myHero.addTask( task1 );
    myHero.addTask( task2 );
    myHero.addTask( task3 );
    myHero.addTask( task4 );
    myHero.sortTaskByUrgency();
    assert.strictEqual(myHero.tasks[0].name, "Blow up the Death Star");
  });

  it("hero can view completed tasks", function () {
    myHero.addTask( task1 );
    myHero.addTask( task2 );
    myHero.addTask( task3 );
    myHero.addTask( task4 );
    myHero.setTaskAsCompleted( task1 );
    myHero.setTaskAsCompleted( task4 );
    var completed = myHero.getCompletedTask();
    assert.strictEqual(completed.length, 2);
  });
})
