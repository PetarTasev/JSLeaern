import { clearUserData, getUserData } from "../util.js"

const host = 'http://localhost3030'

async function request(method, url, data) {

    const options = {
        method,
        headers: {}
    }

    if (data != undefined) {
        options.headers['Content-Type'] = 'application/json'
        options.body = JSON.stringify(data)
    }

    const userData = getUserData()

    if (userData) {
        options.headers['X-Authorization'] = userData.accessToken;
    }

    try {
    const res = await fetch(host + url, options)

    if (res.ok == false) {

        if (res.ok == 403) {
            clearUserData
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
        alert(err)
        throw err
    }
}

export async function get(url) {
    return request('get', url)
}
export async function put(url, data) {
    return request('put', url, data)
}
export async function post(url) {
    return request('post', url, data)
}
export async function del(url) {
    return request('delete', url)
}