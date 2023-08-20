import { createContext, useEffect, useState, ReactNode } from 'react'
import { GameData } from '../interfaces/GameData'

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

  function addGameIntoCart(game: GameData): void {
    const newGame = { ...game, quantity: 1, subtotal: game.price }
    const newCart = [...cart, newGame]

    setCart(newCart)
  }

  return (
    <CartContext.Provider value={{ cart, addGameIntoCart }}>
      {children}
    </CartContext.Provider>
  )
}
