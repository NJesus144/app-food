import { useEffect, useState } from 'react'

import { Head } from '../../../components/Head/Head'
import { GameTitle } from '../../../components/GameTitle/GameTitle'
import { Games } from '../../../components/Games/Games'
import { getHorror } from '../../../services/api'
export function TerrorPage() {
  const [horror, setHorror] = useState([])

  useEffect(() => {
    ;(async () => {
      const rpgRequest = await getHorror()
      setHorror(rpgRequest.data)
    })()
  }, [])

  return (
    <>
      <Head title="TERROR" />
      <GameTitle>Terror</GameTitle>
      <Games games={horror} />
    </>
  )
}
