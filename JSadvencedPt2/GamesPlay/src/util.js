
export function getUserData() {
    const thing = JSON.parse(sessionStorage.getItem('userData'))
    if (thing == null) {
        return false
    }
    return thing
}

export function setUserData(data) {
    sessionStorage.setItem('userData', JSON.stringify(data))
}

export function clearUserData() {
    sessionStorage.removeItem('userData')
}

