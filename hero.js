var Hero = function( name ){
  this.name = name;
  this.health = 100;
  this.favFood = {name: null};
}

Hero.prototype = {
  setHealth: function ( value ) {
    this.health = value;
  },

  setFavFood: function ( food ) {
    this.favFood.name = food;
  }
};

module.exports= Hero;
