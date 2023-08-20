import { useGame } from '../../../hooks/useGame'

import { Head } from '../../../components/Head/Head'
import { GameTitle } from '../../../components/GameTitle/GameTitle'
import { Games } from '../../../components/Games/Games'

export function RpgPage() {
  const { rpg } = useGame()

  return (
    <>
      <Head title="RPG" />
      <GameTitle>RPG</GameTitle>
      <Games games={rpg} />
    </>
  )
}
