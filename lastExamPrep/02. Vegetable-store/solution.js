class VegetableStore {
  constructor(owner, location) {
    this.owner = owner
    this.location = location
    this.availableProducts = []
  }

  loadingVegetables(vegetables) {
    let vegies = []
    for (let vegetable of vegetables) {
      let [type, quantety, price] = vegetable.split(' ')
      if (vegies.indexOf(type) == -1) {
        vegies.push(type)
      }
      quantety = Number(quantety)
      price = Number(price)

      let neww = true
      for (let food of this.availableProducts) {
        if (food.type == type) {
          food.quantety += quantety
          const odlPrice = Number(food.price)
          const newPrice = price
          if (odlPrice < newPrice) {
            food.price = Number(newPrice)
          }
          neww = false
        }
      }
      if (neww) {
        this.availableProducts.push({ type: type, quantety: quantety, price: price })

      }
    }

    return 'Successfully added ' + vegies.join(', ')
  }

  buyingVegetables(selected) {
    let total = 0.00;
    for (let green of selected) {
      let [type, amount] = green.split(' ')
      amount = Number(amount)
      let food = this.availableProducts.find(v => v.type == type)
      if (food) {
        let given = this.availableProducts[this.availableProducts.indexOf(food)]
        if (given.quantety >= amount) {
          this.availableProducts[this.availableProducts.indexOf(food)].quantety -= amount

          total += (amount * given.price)
        } else {
          throw Error(`The quantity ${amount} for the vegetable ${type} is not available in the store, your current bill is $${total.toFixed(2)}.`)

        }
      } else {
        throw Error(`${type} is not available in the store, your current bill is $${total.toFixed(2)}.`)
      }
    }
    return `Great choice! You must pay the following amount $${total.toFixed(2)}.`
  }
  rottingVegetable(type, amount) {
    amount = Number(amount)
    let food = this.availableProducts.find(v => v.type == type)
    console.log(food)
    if (food) {
      //let given = this.availableProducts[ this.availableProducts.indexOf(food)]
      if (food.quantety <= amount) {
        this.availableProducts[this.availableProducts.indexOf(food)].quantety = 0
        return `The entire quantity of the ${type} has been removed.`
      } else {
        this.availableProducts[this.availableProducts.indexOf(food)].quantety -= amount
        return `Some quantity of the ${type} has been removed.`
      }
    } else {
      throw Error(`${type} is not available in the store.`)
    }
  }

  revision() {
    let final = []
    final.push("Available vegetables:")

    const copy = this.availableProducts

    copy.sort((a,b) => a.price - b.price)
    for (let product of copy) {
      final.push(`${product.type}-${product.quantety}-$${product.price}`)
    }
    final.push(`The owner of the store is ${this.owner}, and the location is ${this.location}.`)
    return final.join('\n')
  }
}
