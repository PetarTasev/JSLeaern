function notify(message) {
  const notifiacation = document.getElementById("notification");
  notifiacation.textContent = message;
   notifiacation.style.display = "block";
 
   notifiacation.addEventListener('click', () => {
    notifiacation.style.display = 'none'
   })
}

