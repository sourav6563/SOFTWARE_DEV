//reutn is mainly used to stp the function aftrer that no new code will work
function makechai(tea) {
  return `making of tea ${tea}`;
}
let tea = maketea("chai");
console.log(tea);

function orderTea(teaType) {
  function confirmOrder() {
    return `order Confirm for chai`;
  }
  return confirmOrder();
}
let orderConfirmation = orderTea("chai");
console.log(orderConfirmation);

const total = (tea) => {
  return `hey its your ${tea}`;
};
console.log(total("chai"));

const totalQuantity = (price, queantity) => price * queantity;

const totalcost = totalQuantity(499 * 100);

function maketea(typeOftea) {
  return `tea: ${typeOftea}`;
}

function processTeaorder(teaFunction) {
  return teaFunction("earl grey ");
}
let order = processTeaorder(maketea);
console.log(order);


function createTeamaker() {
  return function (teamaker) {
    return `making ${teamaker}`;
  };
}
let teamaker = createTeamaker();
let result = teamaker('green tea')
console.log(result);
