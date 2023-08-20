import { useGame } from '../../../hooks/useGame'

import { Head } from '../../../components/Head/Head'
import { GameTitle } from '../../../components/GameTitle/GameTitle'
import { Games } from '../../../components/Games/Games'

export function FpsPage() {
  const { fps } = useGame()
  return (
    <>
      <Head title="FPS" />
      <GameTitle>Fps</GameTitle>
      <Games games={fps} />
    </>
  )
}
