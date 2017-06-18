var Villian = require('./villian.js');

var SuperVillian = function (name, owesomePower ) {
  Villian.call( this, name, owesomePower );
  this.owesomePower = owesomePower;
}

SuperVillian.prototype = {
  useOwesomePower: function ( hero ) {
    switch ( this.owesomePower) {
      case "DoubleHara-kiri":
        hero.getDamage( 100 );
        this.health = 0;
        break;
      default:
        //nada
    }
  },

}

module.exports = SuperVillian;
