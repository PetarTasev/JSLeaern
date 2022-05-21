function fruit(fruitName, fruitWaight, pricePerKG) {
    let fruitWaightKG = fruitWaight / 1000;
    let totalPrice = fruitWaightKG * pricePerKG;
    console.log(`I need $${totalPrice.toFixed(2)} to buy ${fruitWaightKG.toFixed(2)} kilograms ${fruitName}.`)
}

fruit('orange', 2500, 1.80)