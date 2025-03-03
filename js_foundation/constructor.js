function Person(name, age) {
  this.name = name;
  this.age = age;
}

function car(make, model) {
  this.make = make;
  this.model = model;
}
let myCar = new car("toyota", "fortunar");
console.log(myCar);

let mynewCar = new car("tata", "nexon");
console.log(mynewCar);

function Tea(type) {
  this.type = type;
  this.describe = function () {
    return `this is a cup of ${this.type}`;
  };
}

let lemontea = new Tea("lemon tea");
console.log(lemontea.describe());

function Animal(species) {
  this.species = species;
}
Animal.prototype.sound = function () {
  return `${this.species} make a sound`;
};
let dog = new Animal("dog");
console.log(dog);
console.log(dog.sound());

let cat = new Animal("cat");
console.log(cat);
console.log(cat.sound());

function Drink(type) {
  if (!new.target) {
    throw new Error("Drink must be call with new");
  }
  this.type = type;
}
let tea = new Drink("tea"); 
let coffee = new Drink("coffee");
