import axios from 'axios'
import { GameData } from '../interfaces/GameData'

const api = axios.create({
  baseURL: 'http://localhost:5173'
})

export const getFps = () => api.get<GameData[]>('/fps')
export const getRogueLike = () => api.get<GameData[]>('/rogue-like')
export const getRpg = () => api.get<GameData[]>('/rpg')
export const getHorror = () => api.get<GameData[]>('/horror')

export default api
 
