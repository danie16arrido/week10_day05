var Food = function ( name, value ) {
  this.name = name;
  this.value = value;
  this.isPoisonous = false;
};

Food.prototype = {
  setPoisonous: function () {
    this.isPoisonous = true;
  }
};

module.exports = Food;
