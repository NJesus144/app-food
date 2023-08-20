import { useContext } from 'react'
import { GameContext } from '../contexts/GameProvider'

export function useGame() {
  return useContext(GameContext)
}
