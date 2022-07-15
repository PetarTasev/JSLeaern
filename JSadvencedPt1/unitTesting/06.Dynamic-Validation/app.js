function validate() {
  let email = document.getElementById("email");
  let regex = /[a-z]+@[a-z]+.[a-z]+/g;
  console.log('we it')

  email.addEventListener("change", () => {
    if (regex.test(email.value)) {
        email.classList.remove('error')
    } else {
        email.classList.add('error')
    }
  });
}
