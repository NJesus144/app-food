import { createContext, useEffect, useState, ReactNode } from 'react'
import { GameData } from '../interfaces/GameData'
import { getFps, getHorror, getRogueLike, getRpg } from '../services/api'

interface GameContextProps {
  fps: GameData[]
  rogueLike: GameData[]
  rpg: GameData[]
  horror: GameData[]
}

interface GameProviderProps {
  children: ReactNode
}

export const GameContext = createContext({} as GameContextProps)

function GameProvider({ children }: GameProviderProps) {
  const [fps, setFps] = useState<GameData[]>([])
  const [rogueLike, setRogueLike] = useState<GameData[]>([])
  const [rpg, setRpg] = useState<GameData[]>([])
  const [horror, setHorror] = useState<GameData[]>([])

  useEffect(() => {
    ;(async () => {
      try {
        const fpsRequest = await getFps()
        const rogueLikeRequest = await getRogueLike()
        const rpgRequest = await getRpg()
        const horrorRequest = await getHorror()

        const requests = [
          fpsRequest,
          rogueLikeRequest,
          rpgRequest,
          horrorRequest
        ]

        const [
          { data: fpsResponse },
          { data: rogueLikeResponse },
          { data: rpgResponse },
          { data: horrorResponse }
        ] = await Promise.all(requests)

        setFps(fpsResponse)
        setRogueLike(rogueLikeResponse)
        setRpg(rpgResponse)
        setHorror(horrorResponse)
      } catch (error) {
        console.error(error)
      }
    })()
  }, [])

  return (
    <GameContext.Provider value={{ fps, rogueLike, rpg, horror }}>
      {children}
    </GameContext.Provider>
  )
}

export default GameProvider
