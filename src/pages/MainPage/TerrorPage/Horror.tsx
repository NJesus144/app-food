import { useGame } from '../../../hooks/useGame'

import { Head } from '../../../components/Head/Head'
import { GameTitle } from '../../../components/GameTitle/GameTitle'
import { Games } from '../../../components/Games/Games'

export function HorrorPage() {
  const { horror } = useGame()

  return (
    <>
      <Head title="TERROR" />
      <GameTitle>Terror</GameTitle>
      <Games games={horror} />
    </>
  )
}
