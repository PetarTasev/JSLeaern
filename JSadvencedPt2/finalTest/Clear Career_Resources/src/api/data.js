import * as api from './api.js'











export const login = api.logIn
export const regester = api.regester
export const logout = api.logout

export  function getAllOffers() {
    return api.get('/data/offers?sortBy=_createdOn%20desc')
}

export function createOffer(data) {
    return api.post('/data/offers', data)
}

export function getOfferById(id) {
    return api.get(`/data/offers/${id}`)
}
export function delOffer(id) {
        return api.del(`/data/offers/${id}`)
}

export function updateOffer(id, data) {
    console.log(id)
    return api.put(`/data/offers/${id}`, data)
}


