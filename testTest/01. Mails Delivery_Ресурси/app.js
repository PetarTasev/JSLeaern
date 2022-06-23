function solve() {
  const add = document.getElementById("add");
  const reset = document.getElementById("reset");
  const recipientName = document.getElementById("recipientName");
  const title = document.getElementById("title");
  const message = document.getElementById("message");

  add.addEventListener("click", (ev) => {
    ev.preventDefault();
    console.log("constrol");
    if (
      !(
        message.value.length == 0 ||
        title.value.length == 0 ||
        recipientName.value.length == 0
      )
    ) {
      const li = document.createElement("li");
      const h4 = document.createElement("h4");
      const h4_2 = document.createElement("h4");
      const span = document.createElement("span");
      const div = document.createElement("div");
      div.setAttribute("id", "list-action");
      const send = document.createElement("button");
      send.setAttribute("id", "send");
      send.setAttribute("type", "submit");
      send.addEventListener("click", sendMail);

      const deletee = document.createElement("button");
      deletee.setAttribute("id", "delete");
      deletee.setAttribute("type", "submit");
      deletee.addEventListener("click", deleteMail);

      h4.textContent = "Title: " + title.value;
      li.appendChild(h4);

      h4_2.textContent = "Recipient Name: " + recipientName.value;
      li.appendChild(h4_2);

      span.textContent = message.value;
      li.appendChild(span);

      send.textContent = "Send";
      deletee.textContent = "Delete";
      div.appendChild(send);
      div.appendChild(deletee);

      li.appendChild(div);

      const ul = document.getElementById("list");
      ul.appendChild(li);

      message.value = "";
      title.value = "";
      recipientName.value = "";
    }
  });

  reset.addEventListener("click", (ev) => {
    ev.preventDefault();
    message.value = "";
    title.value = "";
    recipientName.value = "";
  });

  function sendMail(ev) {
    ev.preventDefault();
    const curent = ev.target.parentElement.parentElement;
    const parent = ev.target.parentElement.parentElement.parentElement;

    const ul = document.querySelector(".sent-list");
    const li = document.createElement("li");
    const span1 = document.createElement("span");
    const span2 = document.createElement("span");
    const div = document.createElement("div");
    div.setAttribute("class", "btn");

    const button = document.createElement("button");
    button.setAttribute("type", "submit");
    button.setAttribute("class", "delete");
    button.addEventListener("click", finalRemove);

    const textSpilice = curent
      .querySelectorAll("h4")[0]
      .textContent.slice(
        6,
        curent.querySelectorAll("h4")[0].textContent.length
      );
    const text2Spilice = curent
      .querySelectorAll("h4")[1]
      .textContent.slice(
        15,
        curent.querySelectorAll("h4")[1].textContent.length
      );

    span2.textContent = "To: " + text2Spilice; // to
    li.appendChild(span2);

    span1.textContent = "Title: " + textSpilice; // title
    li.appendChild(span1);

    button.textContent = "Delete";
    div.appendChild(button);
    li.appendChild(div);

    ul.appendChild(li);
    parent.removeChild(curent);
  }

  function deleteMail(ev) {
    ev.preventDefault();

    const parent = ev.target.parentElement.parentElement.parentElement;
    const curent = ev.target.parentElement.parentElement;

    const ul = document.querySelector(".delete-list");
    const li = document.createElement("li");
    const span1 = document.createElement("span");
    const span2 = document.createElement("span");

    const textSpilice = curent
      .querySelectorAll("h4")[0]
      .textContent.slice(
        6,
        curent.querySelectorAll("h4")[0].textContent.length
      );
    const text2Spilice = curent
      .querySelectorAll("h4")[1]
      .textContent.slice(
        15,
        curent.querySelectorAll("h4")[1].textContent.length
      );

    span2.textContent = "To: " + text2Spilice; // to
    li.appendChild(span2);

    span1.textContent = "Title: " + textSpilice; // title
    li.appendChild(span1);

    ul.appendChild(li);

    parent.removeChild(curent);
  }

  function finalRemove(ev) {
    ev.preventDefault();
    const parent = ev.target.parentElement.parentElement.parentElement;
    const curent = ev.target.parentElement.parentElement;

    const ul = document.querySelector(".delete-list");
    const li = document.createElement("li");
    const span1 = document.createElement("span");
    const span2 = document.createElement("span");

    span2.textContent = curent.querySelectorAll("span")[1].textContent;
    li.appendChild(span2);

    span1.textContent = curent.querySelectorAll("span")[0].textContent;
    li.appendChild(span1);

    ul.appendChild(li);

    parent.removeChild(curent);
  }
}
solve();
