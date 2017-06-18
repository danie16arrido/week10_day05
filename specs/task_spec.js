var Task = require('../task.js');
var assert = require('assert');


describe('Test Task', function(){

  var myTask;

  beforeEach(function () {
    myTask = new Task("Kill Monsters", 10, 5, "Chocolate");
  })

  it("task has a difficulty level", function () {
    assert.strictEqual(myTask.difficulty, 10);
  });

  it("can set task difficulty", function () {
    myTask.setDifficulty(9);
    assert.strictEqual(myTask.difficulty, 9);
  });

  it("task has urgency level", function () {
    assert.strictEqual(myTask.defcon, 5);
  });

  it("can set defcon to new value", function () {
    myTask.setDefcon(4);
    assert.strictEqual(myTask.defcon, 4);
  });

  it("task has a reward", function () {
    assert.strictEqual(myTask.reward, "Chocolate");
  });

  it("task is not completed to start with", function () {
    assert.strictEqual(myTask.isComplete, false);
  });

  it("task can me marked as completed", function () {
    myTask.setAsCompleted();
    assert.strictEqual(myTask.isComplete, true);
  } );

})
