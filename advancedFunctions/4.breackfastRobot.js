function logic() {
  let protein = 0;
  let carbohydrate = 0;
  let fat = 0;
  let flavour = 0;
  /*• apple - made with 1 carbohydrate and 2 flavour
    • lemonade - made with 10 carbohydrate and 20 flavour
    • burger - made with 5 carbohydrate, 7 fat and 3 flavour
    • eggs - made with 5 protein, 1 fat and 1 flavour
    • turkey - made with 10 protein, 10 carbohydrate, 10 fat and 10 flavour*/
  let neededP = 0;
  let neededC = 0;
  let neededFat = 0;
  let neededFla = 0;

  const ingrediants = {
    apple(quantety) {
      neededC = 1 * quantety;
      neededFla = 2 * quantety;
    },
    lemonade(quantety) {
      neededC = 10 * quantety;
      neededFla = 20 * quantety;
    },
    burger(quantety) {
      neededC = 5 * quantety;
      neededFat = 7 * quantety;
      neededFla = 3 * quantety;
    },
    egg(quantety) {
      neededP = 5 * quantety;
      neededFat = 1 * quantety;
      neededFla = 1 * quantety;
    },
    turkey(quantety) {
      neededP = 10 * quantety;
      neededC = 10 * quantety;
      neededFat = 10 * quantety;
      neededFla = 10 * quantety;
    },
  };

  const restock = {
    protein(add) {
      protein += add;
    },
    carbohydrate(add) {
      carbohydrate += add;
    },
    fat(add) {
      fat += add;
    },
    flavour(add) {
      flavour += add;
    },
  };

  /*  • restock <microelement> <quantity> - increases the stored quantity of the given microelement
    • prepare <recipe> <quantity> - uses the available ingredients to prepare the given meal
    • report - returns information about the stored microelements, in the order described below, including zero elements*/
  const command = {
    restock(element, quantety) {
      restock[element](quantety);
      return 'Success'
    },
    prepare(recepie, quantety) {
      ingrediants[recepie](quantety);
       return calc();
    },
    report() {
      const allIngrediants = {
        [carbohydrate]: "carbohydrate",
        [flavour]: "flavours",
        [fat]: "fat",
        [protein]: "protein",
      };
      //protein={qty} carbohydrate={qty} fat={qty} flavour={qty}
      let key = Object.keys(allIngrediants);
      key.sort((a, b) => a - b);
      let result = {};
      for (let n = 0; n <= 3; n++) {
        result[key[n]] = allIngrediants[key[n]];
      }
      let string = ''
      for (let indexin of key) {
        string +=  `${result[key]}=${key} `
      } 
    
      return 'we feanafiger it out'
    },
  }
  function calc() {
    if (protein < neededP) {
      return `Error: not enough protein in stock`;
    }
    if (carbohydrate < neededC) {
      return `Error: not enough carbohydrate in stock`;
    }
    if (fat < neededFat) {
      return `Error: not enough fat in stock`;
    }
    if (flavour < neededFla) {
      return `Error: not enough flavour in stock`;
    }
    protein -= neededP;
    fat -= neededFat;
    carbohydrate -= neededC;
    flavour -= neededFla;
    neededC = 0;
    neededFat = 0;
    neededFla = 0;
    neededP = 0;
    return 'Success'
  }
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
