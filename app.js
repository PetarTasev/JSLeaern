window.addEventListener("load", solve);

function solve() {
  const product = document.getElementById('type-product')
  const problem = document.getElementById('description')
  const name = document.getElementById("client-name")
  const number = document.getElementById('client-phone')

  const send = document.querySelector('button')
  send.addEventListener('click', sendForm)

  const clear = document.querySelectorAll('button')[1]
  clear.addEventListener('click', clearAll)

  function sendForm(ev) {

    ev.preventDefault();

    const deviceType = product.value
    const description = problem.value
    const userName = name.value
    const phoneNumber = number.value

    if (!(description.length == 0 || userName.length == 0 || phoneNumber.length == 0)) {
      const div = document.createElement('div')
      div.classList.add('container')

      const h2 = document.createElement('h2')
      const h3 = document.createElement('h3')
      const h4 = document.createElement('h4')
      const button1 = document.createElement('button')
      button1.classList.add('start-btn')
      button1.addEventListener('click', start)

      const button2 = document.createElement('button')
      button2.classList.add('finish-btn')
      button2.disabled = true
      button2.addEventListener('click', finish)


      h2.textContent = 'Product type for repair: ' + deviceType
      div.appendChild(h2)
      h3.textContent = 'Client information: ' + userName + ', ' + phoneNumber
      div.appendChild(h3)
      h4.textContent = 'Description of the problem: ' + description
      div.appendChild(h4)
      button1.textContent = 'Start repair'
      div.appendChild(button1)
      button2.textContent = 'Finish repair'
      div.appendChild(button2)

      const recever = document.getElementById('received-orders')
      recever.appendChild(div)
    }


    product.value = 'Computer'
    problem.value = ''
    name.value = ''
    number.value = ''


  }
  function start(ev) {
    ev.preventDefault();
    ev.target.disabled = true
    ev.target.parentElement.querySelectorAll('button')[1].disabled = false

  }
  function finish(ev) {
    ev.preventDefault();

    const done = document.getElementById('completed-orders')
    const copy = ev.target.parentElement
    copy.removeChild(copy.querySelector('button'))
    copy.removeChild(copy.querySelector('button'))
    done.appendChild(copy)
  }

  function clearAll(ev) {
    ev.preventDefault()

    const child = ev.target.parentElement

    console.log(child.querySelector('div'))
    const allDiv = child.querySelectorAll('div')
    for (let div of allDiv) {
      child.removeChild(div)
    }

  }
}
