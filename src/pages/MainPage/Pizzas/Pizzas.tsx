import { Head } from '../../../components/Head/Head'

import { SnackTitle } from '../../../components/SnackTitle/SnackTitle'
import { Snacks } from '../../../components/Snacks/Snacks'
import { useSnack } from '../../../hooks/useSnack'

export default function Pizzas() {
  const { pizzas } = useSnack()
console.log(pizzas)
  return (
    <>
      <Head title="Pizzas" />
      <SnackTitle>Pizzas</SnackTitle>
      <Snacks snacks={pizzas}></Snacks>
    </>
  )
}
