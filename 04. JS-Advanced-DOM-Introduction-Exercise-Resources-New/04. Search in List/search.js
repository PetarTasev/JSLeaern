function search() {
   let input = document.getElementById('searchText').value
   let cityList = document.getElementsByTagName('li')
   let total = 0;
   let inputLength = input.length;

   for (let n = 0; n < cityList.length; n++) {
         cityList[n].style.textDecoration = 'none';
         cityList[n].style.fontWeight = 'normal';
      if (cityList[n].textContent.substring(0, inputLength) == input) {
         //bold ad underline the thing;
         cityList[n].style.textDecoration = 'underline';
         cityList[n].style.fontWeight = 'bold';
         total++
      }
   }
   document.getElementById('result').textContent = `${total} matches found`
}