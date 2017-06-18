var Hero = function( name ){
  this.name = name;
  this.health = 100;
}

Hero.prototype = {
  setHealth: function ( value ) {
    this.health = value;
  }
};

module.exports= Hero;
