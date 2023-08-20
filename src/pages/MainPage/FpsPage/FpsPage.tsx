import { useState, useEffect, useContext } from 'react'

import { Head } from '../../../components/Head/Head'
import { GameTitle } from '../../../components/GameTitle/GameTitle'
import { Games } from '../../../components/Games/Games'
import { GameContext } from '../../../Contexts/GameContextProvider'

export function FpsPage() {
  
  const { fps } = useContext(GameContext)
  return (
    <>
      <Head title="FPS" />
      <GameTitle>Fps</GameTitle>
      <Games games={fps} />
    </>
  )
}
