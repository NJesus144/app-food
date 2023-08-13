import axios from 'axios'

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL
})

export const getRpg = () => api.get('/rpg')
export const getRogueLike = () => api.get('/rogue-like')
export const getHorror = () => api.get('/horror')
export const getFps = () => api.get('/fps')

export default api
