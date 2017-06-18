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
  }
};

module.exports= Hero;
