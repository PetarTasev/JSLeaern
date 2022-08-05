import * as api from './api.js'

export const login = api.logIn
export const regester = api.regester
export const logout = api.logout

export async function getAllGames() {
    return api.get('/data/games?sortBy=_createdOn%20desc')
}

export async function getAllRecentGames() {
    return api.get('/data/games?sortBy=_createdOn%20desc&distinct=category')
}

export async function createGame(data) {
    return api.post('/data/games', data)
}

export async function getGameById(id) {
    return api.get(`/data/games/${id}`)
}

export async function delGame(id) {
    return api.del(`/data/games/${id}`)
}

export async function editGame(id, data) {
    return api.put(`/data/games/${id}`, data)
}