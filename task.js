var Task = function ( name, difficulty) {
  this.name = name;
  this.difficulty = difficulty;
}

Task.prototype = {
  setDifficulty: function ( difficulty ) {
    this.difficulty = difficulty;
  }
};

module.exports = Task;
