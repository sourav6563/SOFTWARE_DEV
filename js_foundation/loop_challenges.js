// let sum = 0;
// let i = 1;
// while (i <= 10) {
//   sum += i;
//   i++;
// }
// console.log(sum);

// const { keys } = require("object-hash");

// const { keys } = require("object-hash");

// let countdown = [];
// let n = 5;
// while (n > 0) {
//   countdown.push(n);
//   n--;
// }
// console.log(countdown);

// let teacollection = [];
// let tea;
// do {
//   tea = prompt(`Enter your favourite tea (type "stop" to finish)`);
//   if (tea !== "stop") {
//     teacollection.push(tea);
//   }
// } while (tea !== "stop");

// let multipliedNumbers = []
// let numbers = [2,4,6]
// for (let index = 0; index < array.length; index++) {
//   const element = array[index];

// }

let teas = ["green tea", "black tea", "chai", "oolong tea"];
let selectedteas = [];
for (let i = 0; i < teas.length; i++) {
  if (teas[i] !== "chai") {
    selectedteas.push(teas[i]);
  } else {
    break;
  }
}
// console.log(selectedteas);'

let cities = ["london", "NewYork", "paris", "berlin"];
let visitedcities = [];
for (let i = 0; i < cities.length; i++) {
  if (cities[i] === "paris") {
    continue;
  }
  visitedcities.push(cities[i]);
}
// console.log(visitedcities);

let numbers = [1, 2, 3, 4, 5];
let smallnumbers = [];
for (const num of numbers) {
  if (num === 4) {
    break;
  }
  smallnumbers.push(num);
}
// console.log(smallnumbers);

let teatypes = ["green tea", "black tea", "chai", "oolong tea"];

let prefferedTeas = [];
for (const tea of teatypes) {
  if (tea === "chai") {
    continue;
  }
  prefferedTeas.push(tea);
}
// console.log(prefferedTeas);

// let citiesPopulation = {
//   London: 8900000,
//   NewYork: 8400000,
//   Paris: 2200000,
//   berlin: 3500000,
// };
// let citinewPopulation = {};
// // console.log(Object.values(citiesPopulation));

// for (const city in citiesPopulation) {
//   if (city === "berlin") {
//     break;
//   }
//   // console.log(citiesPopulation[city]);
//   citinewPopulation[city] = citiesPopulation[city];

//   console.log(citinewPopulation[city]);
// }

// let citiesPopulation = {
//   London: 8900000,
//   NewYork: 8400000,
//   Paris: 2200000,
//   Berlin: 3500000,
// };
// let citinewPopulation = {};
// for (const city in citiesPopulation) {
//   if (citiesPopulation[city] <= 2200000) {
//     continue;
//   }
//   citinewPopulation[city] = citiesPopulation[city];
//   console.log(citinewPopulation[city]);
// }

// let teaCollection = ["green tea", "black tea", "chai", "oolong tea"];
// let availableTeas = [];

// teaCollection.forEach((tea) => {
//   if (tea === "chai") {
//     return;
//   }
//   availableTeas.push(tea);
// });
// console.log(availableTeas);




let teaCollection = ["green tea", "black tea", "chai", "oolong tea"];
let availableTeas = []; 

for (let index = 0; index < array.length; index++) {
   const element = array[index];
   
}