var _ = require('lodash');

var Hero = function( name ){
  this.name = name;
  this.health = 100;
  this.favFood = {name: null};
  this.tasks = [];
  this.rewards = 0;
  this.isShielded = false;
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
    var isPoison = food.isPoisonous;
    var isFav = this.foodIsFav( food );
    var factor;
    if ( isFav ){
      factor = 1.5;
      if( isPoison ){
        factor *= this.checkRewards(2);
      }
    } else {
      factor = 1;
      if ( isPoison ){
        factor *= this.checkRewards(1);
      }
    }
    return food.value * factor;
  },

  checkRewards: function ( rewardsNeeded ) {
    var factor = 1;
    if( this.rewards >= rewardsNeeded){
      this.rewards -= rewardsNeeded;
    }else {
      factor = -1;
    }
    return factor;
  },

  foodIsFav: function ( food ) {
    return food.name === this.favFood.name;
  },

  hasRewards: function () {
    return ( this.rewards >= 1) ? true : false;
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
  },

  deployShield: function () {
    this.isShielded = true;
  },

  getDamage: function ( attackValue ) {
    if(!this.isShielded){
      this.health -= attackValue;
    }
    //otherwise no damage at all
  }
};

module.exports= Hero;
