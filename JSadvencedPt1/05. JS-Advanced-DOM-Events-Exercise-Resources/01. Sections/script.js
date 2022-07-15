function create(words) {
   const site = document.getElementById('content')

   for (let section of words) {
      const div = document.createElement('div');
      const p = document.createElement('p')
      p.textContent = section;
      p.style.display = 'none'
      div.appendChild(p)

      div.addEventListener('click', show)
      site.appendChild(div)

      function show (ev) {
         ev.currentTarget.children[0].style.display = ''
      }
   }
}