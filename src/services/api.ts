import axios from 'axios'
import { SnackData } from '../interfaces/SnackData'

const api = axios.create({
  baseURL: 'http://localhost:5173'
})

export const getBurgers = () => api.get<SnackData[]>('/burgers')
export const getPizzas = () => api.get<SnackData[]>('/pizzas')
export const getDrinks = () => api.get<SnackData[]>('/drinks')
export const getIceCreams = () => api.get<SnackData[]>('/ice-creams')

export default api
