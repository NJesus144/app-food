import { Head } from '../../../components/Head/Head'
import { SnackTitle } from '../../../components/SnackTitle/SnackTitle'
import { Snacks } from '../../../components/Snacks/Snacks'
import { useSnack } from '../../../hooks/useSnack'

export default function IceCreams() {
  const { iceCreams } = useSnack()

  return (
    <>
     <Head title='Sorvetes' />
      <SnackTitle>Sorvetes</SnackTitle>
      <Snacks snacks={iceCreams}></Snacks>
    </>
  )
}
