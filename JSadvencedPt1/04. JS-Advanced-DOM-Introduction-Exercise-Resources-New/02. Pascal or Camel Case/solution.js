function solve() {
  function solve() {
    let text = document.getElementById('text').value
    let convention = document.getElementById('naming-convention').value
  
    let array = text.toLowerCase().split(' ')
    let result = ''
    if (convention == "Camel Case") {
      for (let a = 0; a < array.length; a++) {
        if (a == 0) {
          result += array[0]
        } else {
          let upper = array[a][0].toUpperCase()
          result += upper
          result += array[a].substring(1)
        }
      }
    } else if (convention == "Pascal Case") {
        for (let n = 0; n < array.length; n++) {
      let upper = array[n][0].toUpperCase()
          result += upper
          result += array[n].substring(1)
        }
    } else {
        result = 'Error!'
    }
  
    document.getElementById('result').textContent = result
  }}