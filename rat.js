var Rat = function ( name ) {
  this.name = name;
}

Rat.prototype = {
  touchFood: function ( food ) {
    food.setPoisonous();
  }
}

module.exports = Rat;
