import http from './axios'

export const login = (username, password) => http.get('/Handler.ashx', {
    username,
    password
})

export const news = (type, count, action) => http.get('/Handler.ashx?', {
    type,
    count,
    action
})


export const newsItem = (action, uniquekey) => http.get('/Handler.ashx?', {
    action,
    uniquekey
})
