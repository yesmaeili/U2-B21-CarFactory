// Define the Car constructor function
class Car {
 constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;   
 }   
}

// Add getDecscription method
Car.prototype.getDecription = function () {
    return 'Make: ${this.make}, Model: ${this.model}, Year: ${this.year}';
};

//ElectricCar function as a subclass of Car
class ElectricCar extends Car {
    constructor(make, model, year,range) {
        super(make, model, year)
        this.range = range;
    }
}

// Override the getDescription method for ElectricCar
ElectricCar.prototype.getDescription = function () {
    return `${Car.prototype.getDescription.call(this)}, Range: ${this.range} miles`;
  };

//Create an instance of ElectricCar 
const electriCar = new ElectricCar("Tesla", "Model S", 2019, 300);

//Call the outpu
console.log(electriCar.getDecription());