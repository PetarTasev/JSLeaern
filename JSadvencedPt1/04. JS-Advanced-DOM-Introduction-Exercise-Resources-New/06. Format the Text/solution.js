function solve() {
  const input = document.getElementById('input').value
  const output = document.getElementById('output')

  const phrases = input.split('.').filter(p => p.length != 0)
  let p = document.createElement('p')
  

  

  while(phrases.length != 0) {
      const word = phrases.splice(0, 3).join('. ') + '.'
      let p = document.createElement('p')
      p.textContent = word
      output.appendChild(p)
  }
    
}