import { useEffect, useState } from 'react'
import { Head } from '../../../components/Head/Head'
import { GameTitle } from '../../../components/GameTitle/GameTitle'
import { Games } from '../../../components/Games/Games'
import { getRogueLike } from '../../../services/api'
import { GameData } from '../../../interfaces/GameData'

export function RogueLikePage() {
  const [rogueLike, setRogueLike] = useState<GameData[]>([])

  useEffect(() => {
    ;(async () => {
      const rogueLikeRequest = await getRogueLike()
      setRogueLike(rogueLikeRequest.data)
    })()
  }, [])

  return (
    <>
      <Head title="ROGUELIKE" />
      <GameTitle>Roguelike</GameTitle>
      <Games games={rogueLike} />
    </>
  )
}
