import { useEffect, useState } from 'react'
import { Head } from '../../../components/Head/Head'
import { GameTitle } from '../../../components/GameTitle/GameTitle'
import { Games } from '../../../components/Games/Games'
import { getRogueLike } from '../../../services/api'

export function RogueLikePage() {
  const [rogueLike, setRogueLike] = useState([])

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
