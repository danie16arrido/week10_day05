var _ = require('lodash');

var Hero = function( name ){
  this.name = name;
  this.health = 100;
  this.favFood = {name: null};
  this.tasks = [];
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

  sortTaskByDifficulty: function () {
    this.tasks = _.orderBy(this.tasks, "difficulty", 'desc' );
    console.log(this.tasks);
  }

};

module.exports= Hero;
