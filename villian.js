var Villian = function( name ){
  this.name = name;
  this.moves = {
    Punch: 10,
    Kick: 15,
    FulNeckSwing: 30,
    SideStepElbow: 20,
    OrbitalHeel: 21,
    GutPunch: 18,
    KneeCrusher: 42
  };
  this.isSuperCharged = false;
}

Villian.prototype = {
  attack: function ( hero , move ) {
    var superChargeFactor = 1;
    if( this.isSuperCharged ){
      superChargeFactor = 2;
    }
    hero.health -= this.moves[move] * superChargeFactor;
  },

  superCharge: function () {
    this.isSuperCharged = true;
  }
}

module.exports = Villian;
