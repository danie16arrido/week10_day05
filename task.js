var Task = function ( name, difficulty, defcon, reward) {
  this.name = name;
  this.difficulty = difficulty;
  this.defcon = defcon;
  this.reward = reward;

}

Task.prototype = {
  setDifficulty: function ( difficulty ) {
    this.difficulty = difficulty;
  },

  setDefcon: function ( defcon ) {
    this.defcon = defcon;
  }

};

module.exports = Task;
