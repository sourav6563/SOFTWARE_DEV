const Person = {
  name: "sourav",
};
let greet = function (city) {
  console.log(`HI i am ${this.name} & i am from ${city}`);
};
const Persontwo = {
  name: "honey",
};
greet.call(Persontwo,'adra');
greet.apply(Persontwo,['adra']);
let greetbind = greet.bind(Persontwo,['adra']);
greetbind()
