function calculator() {
    let number1 = null
    let number2 = null
    let result = null 
    return {
        init,
        add,
        subtract
    }
    function init (n1, n2, r) {
        number1 = document.querySelector(n1)
        number2 = document.querySelector(n2)
        result = document.querySelector(r)
    }
    function add () {
        result.value = Number(number2.value) + Number(number1.value)
    }
    function subtract () {
        result.value = Number(number1.value) - Number(number2.value)
    }
}
