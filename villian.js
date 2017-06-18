var Villian = function( name ){
  this.name = name;
  this.health = 100;
  this.isSuperCharged = false;
  this.moves = {
    Punch: 10,
    Kick: 15,
    FulNeckSwing: 30,
    SideStepElbow: 20,
    OrbitalHeel: 21,
    GutPunch: 18,
    KneeCrusher: 42,
    IrishWhip: 33,
    AtomicDrop: 45
  };
}

Villian.prototype = {
  attack: function ( hero , move ) {
    var superChargeFactor = 1;
    if( this.isSuperCharged ){
      superChargeFactor = 2;
    }
    hero.getDamage(this.moves[move] * superChargeFactor);
  },

  superCharge: function () {
    this.isSuperCharged = true;
  }
}

module.exports = Villian;
