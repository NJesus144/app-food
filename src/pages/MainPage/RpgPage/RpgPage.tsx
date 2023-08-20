import { useEffect, useState } from 'react'

import { Head } from '../../../components/Head/Head'
import { GameTitle } from '../../../components/GameTitle/GameTitle'
import { Games } from '../../../components/Games/Games'
import { getRpg } from '../../../services/api'
import { GameData } from '../../../interfaces/GameData'

export function RpgPage() {
  const [rpg, setRpg] = useState<GameData[]>([])

  useEffect(() => {
    ;(async () => {
      const rpgRequest = await getRpg()
      setRpg(rpgRequest.data)
    })()
  }, [])

  return (
    <>
      <Head title="RPG" />
      <GameTitle>RPG</GameTitle>
      <Games games={rpg} />
    </>
  )
}
