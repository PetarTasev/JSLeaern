function logic() {
  let protein = 0;
  let carbohydrate = 0;
  let fat = 0;
  let falvours = 0;
  return function (...commands) {
    console.log(commands);
  };
}

let manager = logic();
console.log(manager("restock flavour 50")); // Success
console.log(manager("prepare lemonade 4")); // Error: not enough carbohydrate in stock
