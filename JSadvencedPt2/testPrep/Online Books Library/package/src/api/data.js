import * as api from './api.js'

export const login = api.logIn
export const regester = api.regester
export const logout = api.logout

export async function getAllBooks() {
    return api.get('/data/books?sortBy=_createdOn%20desc')
}

export async function createBook(data) {
    return api.postA('/data/books', data)
}

export async function getBookBeId(id) {
    return api.get(`/data/books/${id}`)
}

export async function editBook(id, data) {
    return api.putA(`/data/books/${id}`, data)
}

export async function deleteBook(id) {
    return api.delA(`/data/books/${id}`)
}

export async function getMyBooks(userId) {
    return api.getA(`/data/books?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`)
}

export async function likeBook(data) {
    return api.post('.data/likes', {data})
}

export async function getTotalLikes(id) {
    return api.get(`/data/likes?where=bookId%3D%22${id}%22&distinct=_ownerId&count`)
}

export async function getlikesFromUserBook(bookId, userId) {
    return api.get(`:/data/likes?where=bookId%3D%22${bookId}%22%20and%20_ownerId%3D%22${userId}%22&count`)
}
