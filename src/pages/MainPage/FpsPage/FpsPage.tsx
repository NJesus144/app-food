import { useState, useEffect } from 'react'

import { Head } from '../../../components/Head/Head'
import { GameTitle } from '../../../components/GameTitle/GameTitle'
import { Games } from '../../../components/Games/Games'
import { getFps } from '../../../services/api'

export function FpsPage() {
  const [fps, setFps] = useState([])

  useEffect(() => {
    ;(async () => {
      const fpsRequest = await getFps()
      setFps(fpsRequest.data)
    })()
  }, [])

  return (
    <>
      <Head title="FPS" />
      <GameTitle>Fps</GameTitle>
      <Games games={fps} />
    </>
  )
}
