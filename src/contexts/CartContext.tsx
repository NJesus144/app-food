import { createContext, useState, ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { SnackData } from '../interfaces/SnackData'

import { snackEmoji } from '../helpers/snackEmoji'
import { CustomerData } from '../interfaces/CustomerData'

interface Snack extends SnackData {
  quantity: number
  subtotal: number
}

// interface removeGameFromCart {
//   id: number
//   game: string
// }

// interface UpdateCartProps {
//   id: number
//   game: string
//   newQuantity: number
// }

interface CartContextProps {
  cart: Snack[]
  addSnackIntoCart: (snack: SnackData) => void
  removeSnackFromCart: (snack: Snack) => void
  snackCartIncrement: (snack: Snack) => void
  snackCartDecrement: (snack: Snack) => void
  confirmOrder: () => void
  payOrder: (customer: CustomerData) => void
}

interface CartProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextProps)

const localStorageKey = '@foodCommerce:cart'

export function CartProvider({ children }: CartProviderProps) {
  const navigate = useNavigate()
  const [cart, setCart] = useState<Snack[]>(() => {
    const value = localStorage.getItem(localStorageKey)

    if (value) return JSON.parse(value)
    return []
  })

  function saveCart(data: Snack[]) {
    setCart(data)

    localStorage.setItem(localStorageKey, JSON.stringify(data))
  }

  function clearCart() {
    localStorage.removeItem(localStorageKey)
  }

  //buscar
  function addSnackIntoCart(snack: SnackData): void {
    const gameExistentInCart = cart.find(
      item => item.snack === snack.snack && item.id === snack.id
    )

    //atualizar
    if (gameExistentInCart) {
      const newCart = cart.map(item => {
        if (item.id === snack.id) {
          const quantity = item.quantity + 1
          const subtotal = item.price * quantity

          return { ...item, quantity, subtotal }
        }

        return item
      })

      toast.success(
        `${snackEmoji(snack.snack)} ${snack.name} adicionado nos pedidos`
      )
      saveCart(newCart)

      return
    }

    //adicionar
    const newGame = { ...snack, quantity: 1, subtotal: snack.price }
    const newCart = [...cart, newGame]

    toast.success(
      `${snackEmoji(snack.snack)} ${snack.name} adicionado nos pedidos`
    )

    saveCart(newCart)
  }

  function removeSnackFromCart(snack: Snack) {
    const newCart = cart.filter(
      item => !(item.id === snack.id && item.snack === snack.snack)
    )

    saveCart(newCart)
  }

  function updateSnackQuantity(snack: Snack, newQuantity: number) {
    if (newQuantity <= 0) return

    const gameExistentInCart = cart.find(
      item => item.id === snack.id && snack.snack === item.snack
    )

    if (!gameExistentInCart) return

    const newCart = cart.map(item => {
      if (
        item.id === gameExistentInCart.id &&
        item.snack === gameExistentInCart.snack
      ) {
        return {
          ...item,
          quantity: newQuantity,
          subtotal: item.price * newQuantity
        }
      }
      return item
    })

    saveCart(newCart)
  }

  function snackCartIncrement(snak: Snack) {
    updateSnackQuantity(snak, snak.quantity + 1)
  }

  function snackCartDecrement(snak: Snack) {
    updateSnackQuantity(snak, snak.quantity - 1)
  }

  function confirmOrder() {
    navigate('/payment')
  }
  function payOrder(customer: CustomerData) {
    console.log('payOrder', cart, customer)
    // chamada de api para o backend

    clearCart() // deve ser executado após retorno positivo da API

    return
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addSnackIntoCart,
        removeSnackFromCart,
        snackCartIncrement,
        snackCartDecrement,
        confirmOrder,
        payOrder
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
