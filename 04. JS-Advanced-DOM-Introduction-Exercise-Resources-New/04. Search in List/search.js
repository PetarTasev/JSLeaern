function search() {
  let input = document.getElementById("searchText").value;
  let cityList = Array.from(document.getElementsByTagName("li"));
  let total = 0;

  for (let n = 0; n < cityList.length; n++) {
    cityList[n].style.textDecoration = "";
    cityList[n].style.fontWeight = "normal";
  }

  for (let n = 0; n < cityList.length; n++) {
    if (cityList[n].textContent.match(input)) {
      cityList[n].style.textDecoration = "underline";
      cityList[n].style.fontWeight = "bold";
      total++;
    }
  }
  document.getElementById("result").textContent = `${total} matches found`;
}
