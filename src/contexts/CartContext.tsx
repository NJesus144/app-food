import { createContext, useEffect, useState, ReactNode } from 'react'
import { toast } from 'react-toastify'

import { GameData } from '../interfaces/GameData'

import { gameEmoji } from '../helpers/gameEmoji'

interface Game extends GameData {
  quantity: number
  subtotal: number
}

interface removeGameFromCart {
  id: number
  game: string
}

interface UpdateCartProps {
  id: number
  game: string
  newQuantity: number
}

interface CartContextProps {
  cart: Game[]
  addGameIntoCart: (game: GameData) => void
  // removeGameFromCart: ({ id, game }: removeGameFromCart) => void
  // updateCart: ({ id, game, newQuantity }: UpdateCartProps) => void
}

interface CartProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextProps)

export function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<Game[]>([])

  //buscar
  function addGameIntoCart(game: GameData): void {
    const gameExistentInCart = cart.find(
      item => item.category === game.category && item.id === game.id
    )

    //atualizar
    if (gameExistentInCart) {
      const newCart = cart.map(item => {
        if (item.id === game.id) {
          const quantity = item.quantity + 1
          const subtotal = item.price * quantity

          return { ...item, quantity, subtotal }
        }

        return item
      })

      toast.success(
        `${gameEmoji(game.category)} ${game.name} adicionado nos pedidos`
      )
      setCart(newCart)

      return
    }

    //adicionar
    const newGame = { ...game, quantity: 1, subtotal: game.price }
    const newCart = [...cart, newGame]

    toast.success(
      `${gameEmoji(game.category)} ${game.name} adicionado nos pedidos`
    )

    setCart(newCart)
  }

  return (
    <CartContext.Provider value={{ cart, addGameIntoCart }}>
      {children}
    </CartContext.Provider>
  )
}
