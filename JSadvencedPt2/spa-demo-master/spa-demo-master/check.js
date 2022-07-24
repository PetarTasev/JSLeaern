
export function checkUserNav() {
    const userData = JSON.parse(sessionStorage.getItem('userData'))
    
    if (userData == null) {
        document.getElementById('guestNav').style.display = 'inline-block'
        document.getElementById('userNav').style.display = 'none'
    } else {
        document.getElementById('guestNav').style.display = 'none' 
        document.getElementById('userNav').style.display = 'inline-block'
    }
}

export function onLogout() {
    
}