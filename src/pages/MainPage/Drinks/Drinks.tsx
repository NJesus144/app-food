import { useSnack } from '../../../hooks/useSnack'

import { Head } from '../../../components/Head/Head'
import { SnackTitle } from '../../../components/SnackTitle/SnackTitle'
import { Snacks } from '../../../components/Snacks/Snacks'

export default function Drinks() {
  const { drinks } = useSnack()
console.log(drinks)
  return (
    <>
     <Head title='Bebidas' />
      <SnackTitle>Bebidas</SnackTitle>
      <Snacks snacks={drinks}></Snacks>
    </>
  )
}
