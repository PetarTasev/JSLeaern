function solve() {
  //[{"name": "Sofa", "img": "url",
  //"price": 150, "decFactor": 1.2}]

  let buttons = document.querySelectorAll("button");

  buttons[0].addEventListener("click", generate);
  buttons[1].addEventListener("click", buy);

  function generate(ev) {
    console.log("we in");
    // get the list of items
    let array = JSON.parse(document.getElementsByTagName("textarea")[0].value);
    console.log(document.getElementsByTagName("textarea")[0]);
    console.log(array);
    // cicle thorough the items
    //for each create a img p p p
    // append them to the body tr
    for (let furniture of array) {
      console.log("we in in ");
      let list = document.querySelector("tbody");

      let tr = document.createElement("tr");
      let tdIMG = document.createElement("td");
      let img = document.createElement("img");
      let tdName = document.createElement("td");
      let name = document.createElement("p");
      let tdPrice = document.createElement("td");
      let price = document.createElement("p");
      let tdEsc = document.createElement("td");
      let esc = document.createElement("p");
      let tdBox = document.createElement("td");
      let box = document.createElement("input");

      img.src = furniture["img"];
      name.textContent = furniture["name"];
      price.textContent = furniture["price"];
      esc.textContent = furniture["decFactor"];
      box.type = "checkbox";

      tdIMG.appendChild(img);
      tr.appendChild(tdIMG);
      tdName.appendChild(name);
      tr.appendChild(tdName);
      tdPrice.appendChild(price);
      tr.appendChild(tdPrice);
      tdEsc.appendChild(esc);
      tr.appendChild(tdEsc);
      tdBox.appendChild(box);
      tr.appendChild(tdBox);

      list.appendChild(tr);
    }
  }
  function buy(ev) {
    let items = [];
    let price = [];
    let estetic = [];

    let elements = document.querySelectorAll("input[type = checkbox]");
    console.log(elements);
    for (let box of elements) {
      if (box.checked) {
        const inputs = Array.from(box.parentElement.parentElement.children)
        inputs.forEach(e => console.log(e.textContent))
        console.log(inputs)
        items.push(inputs[1].textContent)
        
        price += Number(inputs[2].textContent)
        
        estetic +=Number(inputs[3].textContent)
      }
    }
    let averageESC = estetic / items.length


    console.log(`Bought furniture: ${items.join(', ')}`)
    console.log(`Total price: ${price}`)


    const output = document.getElementsByTagName("textarea")[1]
    // output.textContent += `Bought furniture: ${items.join(', ')}` += '\r\n' +
    //  `Total price: ${price}` + '\r\n' + `Average decoration factor: ${averageESC}`

    output.textContent += `Bought furniture: ${items.join(', ')}\r\n`
    output.textContent += `Total price: ${price.toFixed(2)}\r\n`
    output.textContent += `Bought furniture: ${items.join(', ')}`
  }
}
