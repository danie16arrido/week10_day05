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
    var factor = 0;
    if(food.name === this.favFood.name){
      factor = 1.5;
    }else if( food.isPoisonous ) {
      factor = -1;
    }
    else {
      factor = 1;
    }
    return food.value * factor;
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
    this.rewards += task.reward;
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
