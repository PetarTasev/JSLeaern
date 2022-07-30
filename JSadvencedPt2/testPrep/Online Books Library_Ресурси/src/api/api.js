

const host = 'http://localhost:3030'

async function requeset (method, url, data) {
    const options = {
        method,
        headers: {}
    }

    if (data != undefined) {
        options.headers['Content-Type'] = 'application/json'
        options.body = JSON.stringify(data)
    }

    const userData = getUserData
    if (userData) {
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


export async function logIn(email, password) {
    try {
        const res = await fetch('http://localhost:3030/users/login', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email, password})
        }) 

        if (res.ok == false) {
            const error = await res.json()
            throw Error(error.message)
        }
        const data = await res.json()
        
        const userData = {
            email: data.email,
            accessToken: data.accessToken,
            id: data._id
        }

        setUserData(userData)
    } catch(err) {
        alert(err.message)
    }
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
    return JSON.stringify(sessionStorage.getItem('userData'))
}

export function setUserData(data) {
    sessionStorage.setItem('userData', JSON.stringify(data))
}

export function clearUserData() {
    sessionStorage.removeItem('userData')
}