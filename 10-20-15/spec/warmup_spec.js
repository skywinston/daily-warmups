var Car = require('../warmup');

describe('ElectricCar', function(){

  beforeEach(function(){
    var car = new Car;
  });

  it('Can travel up to 100 miles per charge', function(){
    car.drive(100);
    expect(car.range).toEqual(0);
  });
});
