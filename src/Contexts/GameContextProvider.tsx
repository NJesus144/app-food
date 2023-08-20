import { createContext, useEffect, useState, ReactNode } from 'react'
import { GameData } from '../interfaces/GameData'
import { getFps } from '../services/api'

interface GameContextProps {
  fps: GameData[]
  // rogueLike: GameData[]
  // rpg: GameData[]
  // horror: GameData[]
}

interface contextProps {
  children: ReactNode
}

export const GameContext = createContext({} as GameContextProps)

function GameContextResponseAPI({ children }: contextProps) {
  const [fps, setFps] = useState<GameData[]>([])

  useEffect(() => {
    ;(async () => {
      const fpsRequest = await getFps()
      setFps(fpsRequest.data)
    })()
  }, [])

  return <GameContext.Provider value={{ fps }}>{children}</GameContext.Provider>
}

export default GameContextResponseAPI
