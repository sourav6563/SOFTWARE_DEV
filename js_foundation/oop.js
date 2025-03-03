let car = {
  name: "toyota",
  module: "fortunar",
  year: "1985",
  start: function () {
    return `${this.name} is started in ${this.year}`;
  },
};
// console.log(car.start());

function Person(name, age) {
  this.name = name;
  this.age = age;
}
let banku = new Person("banku", 25);
console.log(banku.name);

Person.prototype.banku = function () {
  return ` hey its your ${this.name}`;
};
console.log(banku.banku());

class vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
  start() {
    return `${this.make} is car from ${this.model}`;
  }
}
let sanku = new vehicle("hyundai", "i20");
console.log(sanku.start());

class tyre extends vehicle {
  drive() {
    return `${this.make} this is an inheritance example`;
  }
}
let mytyre = new tyre("tata", "nexon");
console.log(mytyre);
console.log(mytyre.start());

let vehicleoOne = new vehicle("bmw", "safaiar");
console.log(vehicleoOne);

// encapsulation

class bankaccount {
  #balance = 0;
  deposit(amount) {
    this.#balance += amount;
    return this.#balance;
  }
  getbalance() {
    return `Rs. ${this.#balance}`;
  }
}

let account = new bankaccount();
console.log(account.getbalance());

// static method
class calculator {
  static add(a, b) {
    return a + b;
  }
}
// let minicalc = new calculator();
// console.log(minicalc.add(2, 3));
console.log(calculator.add(2,3));

//getetr & setter
class employee{
  constructor(name,salary){}
   this.name = name
   
}