var Task = function ( name, difficulty, defcon, reward) {
  this.name = name;
  this.difficulty = difficulty;
  this.defcon = defcon;
  this.reward = reward;
  this.isComplete = false;

}

Task.prototype = {
  setDifficulty: function ( difficulty ) {
    this.difficulty = difficulty;
  },

  setDefcon: function ( defcon ) {
    this.defcon = defcon;
  },

  setAsCompleted: function () {
    this.isComplete = true;
  }

};

module.exports = Task;
