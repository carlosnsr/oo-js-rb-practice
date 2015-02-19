var Car = require('../car');

describe('Car', function() {

  describe("#fill", function() {
    it("gives the car gas", function() {
      var car = new Car(10);
      expect(car.gallons).toEqual(0);

      car.fill(5);
      expect(car.gallons).toEqual(5);

      car.fill(5);
      expect(car.gallons).toEqual(10);
    });
  });

  // describe("#drive", function() {
  //   it("uses gas", function() {
  //     var car = new Car(10);
  //     car.fill(10);
  //     car.drive(50);
  //     expect(car.gallons).toEqual(5);
  //   });
  //
  //   it("increments the odometer", function() {
  //     var car = new Car(10);
  //     expect(car.odometer).toEqual(0);
  //     car.drive(50);
  //     car.drive(25);
  //     expect(car.odometer).toEqual(75);
  //   });
  //
  //   it("records trips", function() {
  //     var car = new Car(10);
  //     expect(car.trips).toEqual([]);
  //     car.drive(50);
  //     car.drive(25);
  //     expect(car.trips).toEqual([50, 25]);
  //   });
  // });

});