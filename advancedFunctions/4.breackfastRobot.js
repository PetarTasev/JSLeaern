function logic() {
  const stock = {
    protein: 0,
    carbohydrate: 0,
    fat: 0,
    flavour: 0,
  };
  const recepies = {
    apple: {
      carbohydrate: 1,
      flavour: 2,
    },
    lemonade: {
      carbohydrate: 10,
      flavour: 20,
    },
    burger: {
      carbohydrate: 5,
      fat: 7,
      flavour: 3,
    },
    eggs: {
      protein: 5,
      fat: 1,
      flavour: 1,
    },
    turkey: {
      protein: 10,
      carbohydrate: 10,
      fat: 10,
      flavour: 10,
    },
  };
  const command = {
    restock(food, quantety) {
      stock[food] += quantety;
      return "Success";
    },
    prepare(recepieAS, quantety) {
      const recepie = Object.entries(recepies[recepieAS])
      recepie.forEach(ingredient => (ingredient[1] * quantety))

      for (let [ingredient, needed] of recepie) {
        if (stock[ingredient] < needed) {
          return `Error: not enough ${ingredient} in stock`
        }
      }
      recepie.forEach(([ingredient, used]) => stock[ingredient] -= used)
      return 'Success'
    },
    report() {
      return `protein=${stock.protein} carbohydrate=${stock.carbohydrate} fat=${stock.fat} flavour=${stock.flavour}`;
    },
  };
  return function (input) {
    let [action, food, quantety] = input.split(" ");
    quantety = Number(quantety);
    return command[action](food, quantety);
  };
}

// let manager = logic();
// console.log(manager("restock flavour 50")); // Success
// console.log(manager("prepare lemonade 4")); // Error: not enough carbohydrate in stock
// console.log(manager("report")); // Error: not enough carbohydrate in stock

// aut and be using the arrows you can move up and down a while row

