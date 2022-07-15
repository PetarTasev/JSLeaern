function lockedProfile() {
  Array.from(document.querySelectorAll(".profile button")).forEach((e) =>
    e.addEventListener("click", opener)
  );

  function opener(ev) {
    const parent = ev.target.parentElement;
    const unlocked = parent.querySelector(
      "input[type=radio][value=unlock]"
    ).checked;

    if (unlocked) {
      let div = parent.querySelector('div');
      console.log(div)
      if (ev.target.textContent == "Show more") {
        ev.target.textContent = "Hide it"
        div.style.display = 'none'
      } else {
        ev.target.textContent = "Show more"
        div.style.display = ''
      }
    }
  }
}
