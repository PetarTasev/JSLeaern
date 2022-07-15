function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   let input = document.getElementById('searchField')
   const row = (document.querySelectorAll('tbody tr'))
   
   function onClick() {
   
      for (let kid of row) {
         kid.classList.remove('select')
         if (kid.innerHTML.includes(input.value)) {
            kid.className = 'select'
         }
      }
      input.value = ''
      // go through every one and check enything matches 
      // if yes class select ???

      

   }

}