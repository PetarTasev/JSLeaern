
const host = 'http://localhost:3030'

async function requeset (method, url, data, acess = false) {
    const options = {
        method,
        headers: {}
    }

    if (data != undefined) {
        options.headers['Content-Type'] = 'application/json'
        options.body = JSON.stringify(data)
    }

    
    if (acess) {
        const userData = getUserData()
        options.headers['X-Authorization'] = userData.accessToken
    }

    try {
        const res = await fetch(host + url, options)

        if (res.ok == false) {
            if (res.status == 403) {
                clearUserData()
            }

            const error = await res.json()
            throw new Error(error.message)
        }

        if (res.status == 204) {
            return res
        } else {
            return res.json()
        }

    } catch (err) {
        alert(err.message)
        throw err
    }
}


export async function get(url) {
    return requeset('get', url)
}

export async function post(url, data) {
    return requeset('post',url, data)
}

export async function put(url, data) {
    return requeset('put',url, data)
}


export async function del(url) {
    return requeset('delete', url)
}



export async function getA(url) {
    return requeset('get', url, false, true)
}

export async function postA(url, data) {
    return requeset('post',url, data, true)
}

export async function putA(url, data) {
    return requeset('put',url, data, true)
}


export async function delA(url) {
    return requeset('delete', url, false, true)
}



export async function logIn(email, password) {
    const result = await post('/users/login', {email, password})

    let userData = {
        email: result.email,
        id: result._id,
        accessToken: result.accessToken
    }

    setUserData(userData)
    return result
}

export async function regester(email, password) {
    let result = await post('/users/register', { email, password })

    let userData = {
        email: result.email,
        id: result._id,
        accessToken: result.accessToken
    }

    setUserData(userData)
    return result
}

export async function logout() {
    get('/users/logout')
    clearUserData()
}

export function getUserData() {
    return JSON.parse(sessionStorage.getItem('userData'))
}

export function setUserData(data) {
    sessionStorage.setItem('userData', JSON.stringify(data))
}

export function clearUserData() {
    sessionStorage.removeItem('userData')
}