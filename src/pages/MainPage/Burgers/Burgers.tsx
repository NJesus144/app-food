import { useSnack } from '../../../hooks/useSnack'

import { Head } from '../../../components/Head/Head'
import { SnackTitle } from '../../../components/SnackTitle/SnackTitle'
import { Snacks } from '../../../components/Snacks/Snacks'

export default function Burgers() {
  const { burgers } = useSnack()
  return (
    <>
      <Head title="Hambúrgueres" />
      <SnackTitle>Hambúrgueres</SnackTitle>
      <Snacks snacks={burgers}></Snacks>
    </>
  )
}
