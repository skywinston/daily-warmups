function ElectricCar(){
  this.charged = false;
  this.milesTraveled = 0;
  this.range = 100;

  if(this.milesTraveled % 400 == 0){
    throw new Error("There's a glitch in the car's software. Call Elon.");
  }
}

ElectricCar.prototype.chargeUp = function(){
  this.range = 100;
}

ElectricCar.prototype.drive = function(distance){
  var remainingRange = this.range - distance;
  if(this.range <= 0) console.log("Car must be charged");
  if(remainingRange < 0){
    this.milesTraveled += this.range;
    this.range = 0;
  } else {
    this.milesTraveled += this.range;
    this.range -= distance
  }
}



module.exports = ElectricCar
