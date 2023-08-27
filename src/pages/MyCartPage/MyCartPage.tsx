import { Head } from '../../components/Head/Head'
import { OrderHeader } from '../../components/OrderHeader/OrderHeader'

import { Container } from './styles'

export function MyCartPage() {
  return (
    <Container>
      <Head title="Carrinho" />
      <OrderHeader />
    </Container>
  )
}
