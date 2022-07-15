function validate() {
  const button = document.getElementById("submit");
  const username = document.getElementById("username");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const passwordConfirn = document.getElementById("confirm-password");
  const companyBox = document.getElementById("company");
  const companyInfo = document.getElementById('companyInfo')
  const companyNumber = document.getElementById("companyNumber");

  // first we make the company boz work
    companyBox.addEventListener('change', () => {
        if (companyBox.checked == false) {
            companyInfo.style.display = 'none'
        } else {
            companyInfo.style.display = 'block'
        }
    })

  // then we need to add all the changes to a even listener linked to the button
  
    button.addEventListener('click', validation)

    function validation (ev) {
        ev.preventDefault();
        invalidFields = []
        
        //useername 
        const nameREGEX = /^[a-zA-Z0-9]{3,20}$/
        const user = username.value
        
        if (!nameREGEX.test(user)) {
            invalidFields.push(username)
        } 

        //email
        const emailREGEX = /^[^@.]+@[^@.]+\.[^@]+$/
        const mail = email.value

        if (!emailREGEX.test(mail)) {
            invalidFields.push(email)
        }

        //password
        const passREGEX = /^[\w]{5,15}$/
        const pass1 = password.value
        const pass2 = passwordConfirn.value

        if (!passREGEX.test(pass1) || pass1 !== pass2) {
            invalidFields.push(password)
            invalidFields.push(passwordConfirn)
        }

        //company 
        if (companyBox.checked) {

            const compREGEX = /^[0-9]{4}$/
            const number = companyNumber.value
            if (!compREGEX.test(number)) {
                invalidFields.push(companyNumber)
            }
        }
        invalidFields.forEach(element => element.style.borderColor = 'red');
        !invalidFields.length ? document.querySelector('#valid').style.display = 'block' :
        document.querySelector('#valid').style.block = 'none'
    }
}
