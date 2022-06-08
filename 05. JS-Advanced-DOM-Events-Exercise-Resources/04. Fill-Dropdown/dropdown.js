function addItem() {
    let text = document.getElementById('newItemText').value;
    let Value = document.getElementById('newItemValue').value;
    const menu = document.getElementById('menu');

    let element = document.createElement('option');
    element.textContent = text;
    element.value = Value;
    menu.appendChild(element);

    console.log('i was here')
    document.getElementById("newItemText").value = '';
    document.getElementById("newItemValue").value = ''
}
