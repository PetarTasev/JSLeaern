function encodeAndDecodeMessages() {
        const input = document.querySelectorAll('textarea')
        const buttons = document.querySelectorAll('button')
    
        buttons[0].addEventListener('click', encode)
        buttons[1].addEventListener('click', decode)

        function encode () {
            let encodedMessage = ''
            let message = input[0].value
            for (let n = 0; n < message.length; n++) {
                encodedMessage += String.fromCharCode(message[n].charCodeAt(0) + 1)
            }
            input[1].value = encodedMessage
            input[0].value = ''
        
        }
        function decode () {
            let decodedMessage = ''
            let message = input[1].value
            for (let n = 0; n < message.length; n++) {
                decodedMessage += String.fromCharCode(message[n].charCodeAt(0) - 1)
            }
            input[1].value = decodedMessage
        }
}