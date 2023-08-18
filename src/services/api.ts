import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:5173'
})

export const getFps = () => api.get('/fps')
export const getRogueLike = () => api.get('/rogue-like')
export const getRpg = () => api.get('/rpg')
export const getHorror = () => api.get('/horror')

export default api
