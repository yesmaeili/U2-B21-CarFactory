// Define the Car class
class Car {
    constructor(make, model, year) {
      this.make = make;
      this.model = model;
      this.year = year;
    }
  
    getDescription() {
      return `Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`;
    }
  }
  
  // Define the ElectricCar class as a subclass of Car
  class ElectricCar extends Car {
    constructor(make, model, year, range) {
      super(make, model, year);
      this.range = range;
    }
  
    getDescription() {
      return `${super.getDescription()}, Range: ${this.range} miles`;
    }
  }
  
  // Create an instance of ElectricCar
  const electricCar = new ElectricCar("Tesla", "Model S", 2019, 300);
  
  // Call the output
  console.log(electricCar.getDescription());
  