var _ = require('lodash');

var Hero = function( name ){
  this.name = name;
  this.health = 100;
  this.favFood = {name: null};
  this.tasks = [];
  this.rewards = 0;
}

Hero.prototype = {
  setHealth: function ( value ) {
    this.health = value;
  },

  setFavFood: function ( food ) {
    this.favFood.name = food;
  },

  sayName: function () {
    var text = "I am the great ";
    return text + this.name;
  },

  addTask: function ( task ) {
    this.tasks.push( task );
  },

  eatFood: function ( food ) {
    this.health += this.filterFoodValue( food );
    this.adjustHealthValue();
  },

  filterFoodValue: function ( food ) {
    if(food.name === this.favFood.name){
      return food.value * 1.5;
    } else {
      return food.value;
    }
  },

  adjustHealthValue: function () {
    if(this.health > 100){
      this.health = 100;
    }
  },

  sortTaskBy: function ( sortingKeyWord, order) {
    this.tasks = _.orderBy(this.tasks, sortingKeyWord, order );
  },

  sortTaskByDifficulty: function () {
    this.sortTaskBy( "difficulty", "desc");
  },

  sortTaskByUrgency: function () {
    this.sortTaskBy( "defcon");
  },

  sortTaskByReward: function () {
    this.sortTaskBy( "reward", 'desc');
  },
  setTaskAsCompleted: function ( task ) {
    task.setAsCompleted();
  },

  getCompletedTasks: function () {
    var abc = _.groupBy( this.tasks, "isComplete");
    return abc.true;
  },
  getUnfinishedTasks: function () {
    var abc = _.groupBy( this.tasks, "isComplete");
    return abc.false;
  }
};

module.exports= Hero;
