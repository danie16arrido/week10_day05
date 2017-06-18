var Task = function ( name, difficulty, defcon) {
  this.name = name;
  this.difficulty = difficulty;
  this.defcon = defcon;

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
